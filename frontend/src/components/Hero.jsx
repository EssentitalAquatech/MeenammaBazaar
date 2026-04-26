
// // src/components/Hero.js
// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import heroImage from '../assets/images/HomeMain.png';

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       heading: <> <span className="black-text">Innovating</span> Water Technology </>,
//       paragraph: "Pioneering sustainable solutions for global water challenges with cutting-edge aquatech innovations."
//     },
//     {
//       heading: <> <span className="black-text">Sustainable</span> Solutions </>,
//       paragraph: "Transforming agriculture and industries through eco-friendly water management systems."
//     },
//     {
//       heading: <> <span className="black-text">Future of</span> Water Conservation </>,
//       paragraph: "Leading the way in smart water technology for a greener, more sustainable tomorrow."
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="hero-section position-relative">
      
//       <div className="image-background">
//         <img src={heroImage} alt="Hero Background" className="background-image" />

//         <div className="skyblue-blur-overlay"></div>
//         <div className="video-overlay"></div>
//       </div>

//       <div className="container position-relative z-2">
//         <div className="hero-content text-center">
          
//           <div className="carousel-container">
//             <div className="carousel-wrapper">
//               {slides.map((slide, index) => (
//                 <div 
//                   key={index}
//                   className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
//                 >
//                   <h2 className="carousel-heading display-2 fw-bold mb-4">
//                     {slide.heading}
//                   </h2>
//                   <p className="carousel-paragraph fs-4">
//                     {slide.paragraph}
//                   </p>
//                 </div>
//               ))}
//             </div>
            
//             <div className="carousel-indicators d-flex justify-content-center mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator ${index === currentSlide ? 'active' : ''}`}
//                   onClick={() => setCurrentSlide(index)}
//                 ></button>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;






// src/components/Hero.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hero.css';
import heroImage from '../assets/images/HomeMain.png';

function Hero() {
   const navigate = useNavigate();
  return (
    <section className="hero-section">
      
      <div className="image-background">
        <img src={heroImage} alt="Hero Background" className="background-image" />
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        
        {/* Top Small Heading */}
        <p className="top-tagline">
          Powered By Essential Aquatech
        </p>

        {/* Main Heading */}
        <h1 className="main-heading">
          Machli Palan ka <br/> <span>Trusted</span> Solution
        </h1>

        {/* Paragraph */}
        <p className="hero-para">
          Scientifically Backed Fish Medicine And Feed Deliver To Your
          <br />
          Pond. Trusted By Farmer Across India
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          {/* <button className="hero-btn">
            Buy Recommended Products
          </button> */}
           <button
      className="hero-btn"
      onClick={() => navigate("/shop")}
    >
      Buy Recommended Products
    </button>

        
          <a
  href="Whatsapp_bot_Url: https://wa.me/919046226703"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hero-btn whatsapp-btn">
    <i className="fab fa-whatsapp"></i> Talk To Chatbot
  </button>
</a>

        </div>

      </div>

    </section>
  );
}

export default Hero;






