

// // src/components/Navbar.jsx

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";
// import logoImage from "../assets/images/EssentitalLogo.png";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Shop", path: "/shop" },
//   { label: "Medicines", path: "/medicines" },
//   { label: "Feed", path: "/feed" },
//   { label: "About", path: "/about" },
//   { label: "Contact", path: "/contact" },
// ];

// function Navbar() {
//   const location = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <header className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">

//         {/* Logo */}
//         <Link to="/" className="logo-section">
//           <img src={logoImage} alt="logo" className="logo-img" />

//           <span className="logo-text">
//             Meenamma
//             <span className="brand">Bazaar</span>
//             <span className="brand-tagline">by Essential Aquatech</span>
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="nav-links">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`nav-link ${
//                 location.pathname === item.path ? "active" : ""
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* ✅ CART BUTTON */}
//           <Link to="/cart" className="nav-cart-btn">
//             <i className="fa-solid fa-cart-shopping"></i>
//           </Link>
//         </div>

//         {/* Mobile Button */}
//         <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
//         {navItems.map((item, i) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className="mobile-link"
//             style={{ transitionDelay: `${i * 80}ms` }}
//           >
//             {item.label}
//           </Link>
//         ))}

//         {/* Mobile Cart */}
//         <Link to="/cart" className="mobile-link">
//           <i className="fa-solid fa-cart-shopping"></i> Cart
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Navbar;











// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logoImage from "../assets/images/EssentitalLogo.png";
import { useCart } from "./CartContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Medicines", path: "/medicines" },
  { label: "Feed", path: "/feed" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const cartCount = cart.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo-section">
          <img src={logoImage} alt="logo" className="logo-img" />

          <span className="logo-text">
            Meenamma
            <span className="brand">Bazaar</span>
            <span className="brand-tagline">by Essential Aquatech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CART BUTTON */}
          <Link to="/cart" className="nav-cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {navItems.map((item, i) => (
          <Link
            key={item.path}
            to={item.path}
            className="mobile-link"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {item.label}
          </Link>
        ))}

        {/* Mobile Cart */}
        <Link to="/cart" className="mobile-link">
          <i className="fa-solid fa-cart-shopping"></i> Cart

          {cartCount > 0 && (
            <span className="cart-badge mobile-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;