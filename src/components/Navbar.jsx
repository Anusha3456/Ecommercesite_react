import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase().trim();

    const keywordToRoute = {
      laptop: "/electronics",
      phone: "/electronics",
      mobile: "/electronics",
      electronics: "/electronics",

      perfume: "/fragrance",
      fragrance: "/fragrance",
      scent: "/fragrance",

      shirt: "/mensshirts",
      tshirt: "/mensshirts",
      menswear: "/mensshirts",

      dress: "/womensdresses",
      saree: "/womensdresses",
      womenswear: "/womensdresses",

      sofa: "/furniture",
      chair: "/furniture",
      furniture: "/furniture",

      lipstick: "/beauty",
      cream: "/beauty",
      beauty: "/beauty",
    };

    const matchedRoute = Object.keys(keywordToRoute).find((keyword) =>
      term.includes(keyword)
    );

    if (matchedRoute) {
      navigate(keywordToRoute[matchedRoute]);
    } else {
      navigate(`/search?q=${term}`);
    }

    setSearchTerm("");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="logo2.jpg" height="80" width="200" alt="logo" />
        </NavLink>
      </div>

      <div className="middle">
        <NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink to="/shop"><h2>Shop</h2></NavLink>
        <NavLink to="/categories"><h2>Categories</h2></NavLink>
        <NavLink to="/contact"><h2>Contact</h2></NavLink>
      </div>

      <div className="searchbar">
        <form onSubmit={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="carticon">
        <NavLink to="/cartpage">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
      </div>

      <div className="usericon">
        <NavLink to="/loginpage">
          <i className="fa-solid fa-user"></i>
        </NavLink>
      </div>
    </div>
  );
}
