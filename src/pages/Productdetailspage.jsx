import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./allinone.css";
import { addToCart } from "./cartutils";

export default function Productdetailspage() {
  const location = useLocation();
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!product) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch(() => setProduct(null));
    }
  }, [id, product]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product); // Add the product to cart
     alert("proceed to buy");
  };

  
  return (
    <>
      <div className="product-detail">
        <h2>{product.title}</h2>

        <div className="carousel">
          <button className="prev" onClick={prevSlide}>❮</button>
          <img
            src={product.images[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
          />
          <button className="next" onClick={nextSlide}>❯</button>
        </div>

        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
        <h3>Brand: {product.brand}</h3>
        <h4>Rating: {product.rating} ⭐</h4>

        {/* Add to Cart & Buy Now Buttons */}
        <div className="product-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow} >Buy Now</button>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="reviews">
          <h3>Reviews</h3><br />
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.reviewerName}</strong> ({review.rating} ⭐) <br />
                <em>{review.comment}</em>
              </li>
            ))}
          </ul>
        </div>
      )}

      <br /><br />
      <center>
        <button onClick={() => window.history.back()} className="back-btn">
          ← Back
        </button>
      </center>
      
    </>
  );
}
