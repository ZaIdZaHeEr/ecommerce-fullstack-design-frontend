import "./product-detail-page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import messageIcon from "../assets/message.png";
import basketIcon from "../assets/shopping_basket.png";
import { useCart } from "../components/cartContent.jsx";

function ProductDetail() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${API_URL}/productDetail/${productId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="Product-detail-parent">
        <section className="product-overview">
          <div className="img-section">
            <img
              src={`${API_URL}${product.imagePath}`}
              alt={product.name}
            />
          </div>

          <div className="details-section">
            <p className="in-stock">In stock</p>

            <h4 className="item-title">{product.name}</h4>

            <div className="extra-info">
              <div className="dot"></div>
              <img src={messageIcon} alt="reviews" />
              <p>32 reviews</p>

              <div className="dot"></div>
              <img src={basketIcon} alt="sold" />
              <p>{product.totalSold} sold</p>
            </div>

            <div className="price">
              <p className="original">${product.price}</p>
              <p className="discounted">${product.discountedPrice}</p>
            </div>

            <div className="full">
              <p>
                Price: <span className="values">Negotiable</span>
              </p>
              <p>
                Type: <span className="values">{product.type}</span>
              </p>
              <p>
                Material: <span className="values">{product.material}</span>
              </p>
              <p>
                Design: <span className="values">Modern nice</span>
              </p>
              <p>
                Customization: <span className="values">Customized logo</span>
              </p>
              <p>
                Protection: <span className="values">Refund Policy</span>
              </p>
              <p>
                Warranty: <span className="values">2 years full warranty</span>
              </p>
            </div>
          </div>

          <div className="add-cart-section">
            <div className="subsection">
              <h3 className="supplier-name">{product.suplier}</h3>
              <hr className="hr" />
              <p>{product.supplierLocation}</p>
              <p>Verified Seller</p>
              <p>Worldwide shipping</p>

              <button
                id="add-to-cart"
                onClick={() => {
                  addToCart({
                    id: product.productId,
                    title: product.name,
                    price: product.discountedPrice,
                    image: product.imagePath,
                    seller: product.suplier,
                    material: product.material,
                    type: product.type,
                  });
                }}
              >
                Add to Cart
              </button>
              <button id="seller-profile">Seller Profile</button>
            </div>
          </div>
        </section>

        <section className="product-detail-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </section>

        <section className="discount-banner">
          <div className="left">
            <h2>Super discount on more than 100 USD</h2>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <div className="right">
            <button>Shop now</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetail;
