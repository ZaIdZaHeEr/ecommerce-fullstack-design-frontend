import { useEffect, useState } from "react";
import "./productsPage.css";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);
  const [toggleVariable, setToggleVariable] = useState(true);

  const navigate = useNavigate();

  const toggle_list_view = () => {
    setToggleVariable(true);
  };

  const toggle_grid_view = () => {
    setToggleVariable(false);
  };

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/getProducts`);
        const data = await res.json();

        setProducts(data.products);
      } catch (err) {
        console.log("Error fetching products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="wraper-container">
        <section className="parent-container-product-page">
          {/* FILTERS SECTION */}
          <section className="filters">
            <section className="filter-item">
              <details>
                <summary>
                  <div className="filter-title">
                    <p>Category</p>
                    <img src="/images/Vector.png" alt="" />
                  </div>
                </summary>
                <ul>
                  <li>Mobile accessories</li>
                  <li>Electronics</li>
                  <li>Smartphones</li>
                  <li>Modern tech</li>
                </ul>
              </details>
            </section>

            <section className="filter-item">
              <details>
                <summary>
                  <div className="filter-title">
                    <p>Brands</p>
                    <img src="/images/Vector.png" alt="" />
                  </div>
                </summary>
                <ul>
                  <li>
                    <input type="checkbox" /> Samsung
                  </li>
                  <li>
                    <input type="checkbox" /> Apple
                  </li>
                  <li>
                    <input type="checkbox" /> Huawei
                  </li>
                  <li>
                    <input type="checkbox" /> Poco
                  </li>
                  <li>
                    <input type="checkbox" /> Lenovo
                  </li>
                </ul>
              </details>
            </section>

            <section className="filter-item">
              <details>
                <summary>
                  <div className="filter-title">
                    <p>Features</p>
                    <img src="/images/Vector.png" alt="" />
                  </div>
                </summary>
                <ul>
                  <li>
                    <input type="checkbox" /> Metallic
                  </li>
                  <li>
                    <input type="checkbox" /> Plastic cover
                  </li>
                  <li>
                    <input type="checkbox" /> 8GB Ram
                  </li>
                  <li>
                    <input type="checkbox" /> Super power
                  </li>
                  <li>
                    <input type="checkbox" /> Large Memory
                  </li>
                </ul>
              </details>
            </section>

            <section className="filter-item">
              <details>
                <summary>
                  <div className="filter-title">
                    <p>Price range</p>
                    <img src="/images/Vector.png" alt="" />
                  </div>
                </summary>
                <ul>
                  <li>
                    <input type="checkbox" /> Low
                  </li>
                  <li>
                    <input type="checkbox" /> Medium
                  </li>
                  <li>
                    <input type="checkbox" /> High
                  </li>
                </ul>
              </details>
            </section>
          </section>

          {/* PRODUCTS SECTION */}
          <section className="products">
            {/* VIEW SELECTOR */}
            <div className="view-selector-container">
              <div className="view-selector-left">{products.length} items</div>

              <div className="view-selector-right">
                <input className="abc" type="checkbox" />
                <label className="abc">Verified only</label>

                <select>
                  <option value="Featured">Featured</option>
                </select>

                <div className="view-selector">
                  <div className="grid-selector" onClick={toggle_grid_view}>
                    <img src="/images/gridview.svg" alt="" />
                  </div>
                  <div className="list-selector" onClick={toggle_list_view}>
                    <img src="/images/listview.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT DISPLAY */}
            <div
              className={
                toggleVariable ? "product-display-list" : "product-display-grid"
              }
            >
              {/* LIST VIEW */}
              {toggleVariable &&
                products.map((product) => (
                  <section
                    className="product-list-item"
                    key={product.productId}
                  >
                    <div className="img-container">
                      <img
                        src={`${API_URL}${product.imagePath}`}
                        alt={product.name}
                      />
                    </div>

                    <div className="details-container-list">
                      <h5>{product.name}</h5>

                      <div className="price-section">
                        {product.discountedPrice > 0 ? (
                          <>
                            <p className="original-price">${product.price}</p>
                            <p className="discounted-price">
                              ${product.discountedPrice}
                            </p>
                          </>
                        ) : (
                          <p className="original-price">${product.price}</p>
                        )}
                      </div>

                      <div className="ratings-etc">
                        <div className="gray-dot"></div>
                        <p className="orders-count">
                          {product.totalSold} Orders
                        </p>
                        <div className="gray-dot"></div>
                        <p className="free-shipping">Free shipping</p>
                      </div>

                      <p className="description">{product.description}</p>

                      {/* VIEW DETAILS BUTTON (ONLY NAVIGATION) */}
                      <p
                        className="view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/product/${product.productId}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        View details
                      </p>

                      <div className="add-to-favourities">
                        <img src="/images/icon6.png" alt="" />
                      </div>
                    </div>
                  </section>
                ))}

              {/* GRID VIEW */}
              {!toggleVariable &&
                products.map((product) => (
                  <section
                    className="product-grid-item"
                    key={product.productId}
                  >
                    <div className="image-area">
                      <img
                        src={`${API_URL}${product.imagePath}`}
                        alt={product.name}
                      />
                    </div>

                    <div className="content-area">
                      <div className="price-section">
                        {product.discountedPrice > 0 ? (
                          <>
                            <p className="original-price">${product.price}</p>
                            <p className="discounted-price">
                              ${product.discountedPrice}
                            </p>
                          </>
                        ) : (
                          <p className="original-price">${product.price}</p>
                        )}
                      </div>

                      <p className="product-name">{product.name}</p>

                      {/* VIEW DETAILS BUTTON */}
                      <p
                        className="view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/product/${product.productId}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        View details
                      </p>

                      <div className="add-to-favourities">
                        <img src="/images/icon6.png" alt="" />
                      </div>
                    </div>
                  </section>
                ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default ProductsPage;
