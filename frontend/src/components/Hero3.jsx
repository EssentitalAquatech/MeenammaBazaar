// import React from "react";
// import "./Hero3.css";

// const Hero3 = () => {
//   return (
//     <div className="hero3-section container-fluid">

//       {/* Heading */}
//       <div className="text-center hero3-header">
//         <h1>
//           How it <span className="highlight">Works</span>
//         </h1>
//         <p>
//           From pond problem to deliver solution in four simple steps
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="container">
//         <div className="row g-4 mt-4">

//           {/* Card 1 */}
//           <div className="col-md-3">
//             <div className="hero3-card text-center">
//               <div className="circle">1</div>
//               <h5>Chatbot</h5>
//               <p>Chat with us on WhatsApp</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="col-md-3">
//             <div className="hero3-card text-center">
//               <div className="circle">2</div>
//               <h5>Diagnosis</h5>
//               <p>Tell us your pond problem</p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="col-md-3">
//             <div className="hero3-card text-center">
//               <div className="circle">3</div>
//               <h5>Recommendation</h5>
//               <p>Get the right product</p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="col-md-3">
//             <div className="hero3-card text-center">
//               <div className="circle">4</div>
//               <h5>Why here</h5>
//               <p>Order with one tap</p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Hero3;









import React, { useEffect } from "react";
import "./Hero3.css";

const Hero3 = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".hero3-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="hero3-section container-fluid">

      {/* Heading */}
      <div className="text-center hero3-header">
        <h1>
          How it <span className="highlight">Works</span>
        </h1>
        <p>
          From pond problem to deliver solution in four simple steps
        </p>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="row g-4 hero3-row">

          <div className="col-12 col-md-6 col-lg-3">
            <div className="hero3-card from-left text-center">
              <div className="circle">1</div>
              <h5>Chatbot</h5>
              <p>Chat with us on WhatsApp</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="hero3-card from-bottom text-center">
              <div className="circle">2</div>
              <h5>Diagnosis</h5>
              <p>Tell us your pond problem</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="hero3-card from-top text-center">
              <div className="circle">3</div>
              <h5>Recommendation</h5>
              <p>Get the right product</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="hero3-card from-right text-center">
              <div className="circle">4</div>
              <h5>Why here</h5>
              <p>Order with one tap</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero3;