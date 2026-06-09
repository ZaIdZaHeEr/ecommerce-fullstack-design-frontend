import React, { useState, useEffect } from "react";
import "./ProductManagement.css";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    price: "",
    discountedPrice: "",
    totalSold: "0",
    description: "",
    suplier: "",
    supplierLocation: "",
    type: "",
    material: "",
    imagePath: "",
  });

  // Updated base domain explicitly pointing to your active port 5000
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/getProducts`);
      const data = await res.json();
      if (res.ok) {
        setProducts(data.products);
      } else {
        showError(data.message);
      }
    } catch (err) {
      showError("Failed to fetch product library from server database.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const showError = (msg) => {
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(""), 4000);
  };

  const showSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleAddNewClick = () => {
    setIsEditing(false);
    setImageFile(null);
    setImagePreview("");
    setFormData({
      productId: "",
      name: "",
      price: "",
      discountedPrice: "",
      totalSold: "0",
      description: "",
      suplier: "",
      supplierLocation: "",
      type: "",
      material: "",
      imagePath: "",
    });
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setImageFile(null);
    setImagePreview(product.imagePath ? `${API_URL}${product.imagePath}` : "");
    setFormData({
      productId: product.productId,
      name: product.name,
      price: product.price,
      discountedPrice: product.discountedPrice || "",
      totalSold: product.totalSold || "0",
      description: product.description || "",
      suplier: product.suplier || "",
      supplierLocation: product.supplierLocation || "",
      type: product.type || "",
      material: product.material || "",
      imagePath: product.imagePath || "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const dataPayload = new FormData();
    if (imageFile) {
      dataPayload.append("image", imageFile);
    }

    Object.keys(formData).forEach((key) => {
      dataPayload.append(key, formData[key]);
    });

    const endpoint = isEditing
      ? `${API_URL}/updateProduct`
      : `${API_URL}/addProduct`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method: method,
        body: dataPayload,
      });
      const data = await res.json();

      if (res.ok) {
        showSuccess(data.message);
        handleAddNewClick();
        fetchProducts();
      } else {
        showError(data.message);
      }
    } catch (err) {
      showError("Network transactional processing error occurred.");
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (
      !window.confirm(
        `Are you completely sure you want to delete Product #${productId}?`,
      )
    )
      return;

    try {
      const res = await fetch(`${API_URL}/deleteProduct`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();

      if (res.ok) {
        showSuccess(data.message);
        if (formData.productId === productId) handleAddNewClick();
        fetchProducts();
      } else {
        showError(data.message);
      }
    } catch (err) {
      showError("Could not execute deletion handshake sequence.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header-row">
        <h2 className="admin-title">Inventory Product Dashboard</h2>
        <button
          className="btn-add-new desktop-only"
          onClick={handleAddNewClick}
        >
          + Add New Product
        </button>
      </div>

      {errorMessage && (
        <div className="status-banner error-banner">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="status-banner success-banner">{successMessage}</div>
      )}

      <div className="admin-layout">
        {/* Left Side Workspace Form Card */}
        <div className="admin-sidebar">
          <div className="sidebar-card form-card">
            <h3>
              {isEditing
                ? `Update Specs (ID: ${formData.productId})`
                : "Create New Product Listing"}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Product Visual Image</label>
                <div className="image-upload-wrapper">
                  <div className="form-img-preview">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Upload Preview" />
                    ) : (
                      <span className="upload-icon-placeholder">📸</span>
                    )}
                  </div>
                  <div className="file-input-controls">
                    <input
                      type="file"
                      id="productImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden-file-input"
                    />
                    <label htmlFor="productImage" className="btn-file-label">
                      Choose Image
                    </label>
                    <p className="file-path-indicator">
                      {imageFile
                        ? imageFile.name
                        : formData.imagePath
                          ? formData.imagePath
                          : "No file selected"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="form-row-split">
                <div className="form-group">
                  <label>Product ID</label>
                  <input
                    type="number"
                    name="productId"
                    placeholder="1001"
                    value={formData.productId}
                    onChange={handleInputChange}
                    disabled={isEditing}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Type</label>
                  <input
                    type="text"
                    name="type"
                    placeholder="e.g. Smartphone"
                    value={formData.type}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Galaxy S24 Ultra"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row-split">
                <div className="form-group">
                  <label>Base Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="1200"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Discounted Price ($)</label>
                  <input
                    type="number"
                    name="discountedPrice"
                    placeholder="1050"
                    value={formData.discountedPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row-split">
                <div className="form-group">
                  <label>Supplier Name</label>
                  <input
                    type="text"
                    name="suplier"
                    placeholder="e.g. Samsung"
                    value={formData.suplier}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Supplier Location</label>
                  <input
                    type="text"
                    name="supplierLocation"
                    placeholder="South Korea"
                    value={formData.supplierLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row-split">
                <div className="form-group">
                  <label>Build Material</label>
                  <input
                    type="text"
                    name="material"
                    placeholder="Glass + Aluminum"
                    value={formData.material}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Units Sold</label>
                  <input
                    type="number"
                    name="totalSold"
                    placeholder="0"
                    value={formData.totalSold}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Enter device specification summaries..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn-submit-form">
                  {isEditing ? "Save Changes" : "Save Product"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={handleAddNewClick}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Reconstructed Non-Table Flexbox Grid Section */}
        <main className="admin-main">
          {/* Desktop Product Grid Wrapper */}
          <div className="inventory-card desktop-only">
            {/* Table Header Simulation Row */}
            <div className="inventory-grid-header">
              <div className="col-details">Product Details</div>
              <div className="col-type">Type</div>
              <div className="col-price">Price Rules</div>
              <div className="col-actions text-right">Action Handles</div>
            </div>

            {/* Dynamic Product Data Item Rows */}
            <div className="inventory-grid-body">
              {products.map((product) => (
                <div
                  key={product.productId}
                  className={`inventory-grid-row ${formData.productId === product.productId ? "row-editing" : ""}`}
                >
                  <div className="col-details table-product-cell">
                    <div className="table-img-box">
                      {product.imagePath ? (
                        <img src={`${API_URL}${product.imagePath}`} alt="" />
                      ) : (
                        <div className="img-placeholder">📸</div>
                      )}
                    </div>
                    <div className="table-text-container">
                      <p className="table-product-title">
                        {product.name}{" "}
                        <span className="pid-badge">#{product.productId}</span>
                      </p>
                      <p className="table-product-sub">{product.description}</p>
                    </div>
                  </div>

                  <div className="col-type">
                    <span className="badge-category">
                      {product.type || "General"}
                    </span>
                  </div>

                  <div className="col-price price-stack">
                    <span className="table-product-price">
                      ${product.discountedPrice || product.price}
                    </span>
                    {product.discountedPrice < product.price && (
                      <span className="table-product-strike">
                        ${product.price}
                      </span>
                    )}
                  </div>

                  <div className="col-actions text-right">
                    <div className="table-actions">
                      <button
                        className="btn-edit"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteProduct(product.productId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {products.length === 0 && (
                <div className="empty-table-state">
                  No products found in database records.
                </div>
              )}
            </div>
          </div>

          {/* Adaptive Mobile Stack Cards */}
          <div className="mobile-inventory-list mobile-only">
            {products.map((product) => (
              <div
                key={product.productId}
                className={`mobile-product-card ${formData.productId === product.productId ? "row-editing" : ""}`}
              >
                <div className="mobile-card-body">
                  <div className="table-img-box">
                    {product.imagePath ? (
                      <img src={`${API_URL}${product.imagePath}`} alt="" />
                    ) : (
                      <div className="img-placeholder">📸</div>
                    )}
                  </div>
                  <div className="mobile-card-details">
                    <h4 className="mobile-card-title">{product.name}</h4>
                    <p className="mobile-card-meta">ID: #{product.productId}</p>
                    <p className="mobile-card-meta truncated-description">
                      {product.description}
                    </p>
                    <div className="mobile-price-row">
                      <span className="mobile-card-price">
                        ${product.discountedPrice || product.price}
                      </span>
                      {product.discountedPrice < product.price && (
                        <del>${product.price}</del>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mobile-card-actions">
                  <button
                    className="btn-edit-mob"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit Specs
                  </button>
                  <button
                    className="btn-delete-mob"
                    onClick={() => handleDeleteProduct(product.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p className="empty-table-state">
                No products found in database records.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
