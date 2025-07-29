import { useEffect, useState } from "react";
import "./shop.css";
import { addToCart } from "./cartutils";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showGroceries, setShowGroceries] = useState(false);

  async function getData() {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);

    const uniqueBrands = [
      ...new Set(
        data.products
          .filter((p) => p.category !== "groceries")
          .map((p) => p.brand)
          .filter(Boolean)
      ),
    ];
    setBrands(uniqueBrands);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setShowGroceries(false);
  };

  const handleGroceriesClick = () => {
    setShowGroceries(true);
    setSelectedBrands([]);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setShowGroceries(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = (product) => {
    console.log("Buying product:", product);
    alert(`Proceeding to buy: ${product.title}`);
  };

  const filteredProducts = products.filter((p) => {
    if (showGroceries) return p.category === "groceries";
    if (selectedBrands.length === 0) return p.category !== "groceries";
    return selectedBrands.includes(p.brand);
  });

  return (
    <div className="shop-container">
      <div className="sidebar">
        <h3>Filters</h3>

        <button
          className={`grocery-btn ${showGroceries ? "active" : ""}`}
          onClick={handleGroceriesClick}
        >
          Show Groceries
        </button>

        <div className="brand-filters">
          <h4>Brands</h4>
          {brands.map((brand) => (
            <label key={brand} className="brand-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        <button className="clear-btn" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="main-content">
        <h2>Products</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.brand || "No Brand"}</p>
              <p>${product.price}</p>

              <div className="card-actions">
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="empty-state">No products match the current filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
