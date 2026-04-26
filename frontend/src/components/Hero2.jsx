








// import React from "react";
// import "./hero2.css";

// const Hero2 = () => {
//   return (
//     <section className="hero2-wrapper">

//       {/* Top Info Row */}
//       <div className="hero2-top">

//         <div className="hero2-item">
//           <div className="title-row">
//             <i className="fa-regular fa-clock"></i>
//             <h4>24 x 7 Service</h4>
//           </div>
//           <p>Always here when your pond needs us</p>
//         </div>

//         <div className="hero2-item">
//           <div className="title-row">
//             <i className="fa-solid fa-user-group"></i>
//             <h4>Farmer Trusted</h4>
//           </div>
//           <p>Used across Indian fish farms</p>
//         </div>

//         <div className="hero2-item">
//           <div className="title-row">
//             <i className="fa-solid fa-shield-halved"></i>
//             <h4>Aquaculture Experts</h4>
//           </div>
//           <p>Backed by Essential Aquatech</p>
//         </div>

//       </div>

//       <div className="divider" />

//       {/* Heading */}
//       <div className="hero2-heading">
//         <h2>
//           Shop by <span>Category</span>
//         </h2>
//         <p>Everything your pond needs in one place</p>
//       </div>

//       {/* Cards */}
//       <div className="hero2-cards">

//         <div className="card card1">
//           <div className="card-icon">
//             <i className="fa-solid fa-stethoscope"></i>
//           </div>
//           <h3>Fish Medicines</h3>
//           <p>Treat fungal, bacterial and oxygen problems</p>
//         </div>

//         <div className="card card2">
//           <div className="card-icon">
//             <i className="fa-solid fa-wheat-awn"></i>
//           </div>
//           <h3>Fish Feed</h3>
//           <p>Growth, nursery and immunity boosters</p>
//         </div>

//         <div className="card card3">
//           <div className="card-icon">
//             <i className="fa-solid fa-flask"></i>
//           </div>
//           <h3>Pond Treatment Chemicals</h3>
//           <p>Water clarity, pH and algae control</p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero2;











import React from "react";
import "./hero2.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 }
};

const Hero2 = () => {
  return (
    <section className="hero2-wrapper">

      {/* TOP ITEMS */}
      <div className="hero2-top">

        <motion.div
          className="hero2-item"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          transition={{ duration: 0.6 }}
        >
          <div className="title-row">
            <i className="fa-regular fa-clock"></i>
            <h4>24 x 7 Service</h4>
          </div>
          <p>Always here when your pond needs us</p>
        </motion.div>

        <motion.div
          className="hero2-item"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="title-row">
            <i className="fa-solid fa-user-group"></i>
            <h4>Farmer Trusted</h4>
          </div>
          <p>Used across Indian fish farms</p>
        </motion.div>

        <motion.div
          className="hero2-item"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
          transition={{ duration: 0.6 }}
        >
          <div className="title-row">
            <i className="fa-solid fa-shield-halved"></i>
            <h4>Aquaculture Experts</h4>
          </div>
          <p>Backed by Essential Aquatech</p>
        </motion.div>

      </div>

      <div className="divider" />

      {/* HEADING */}
      <motion.div
        className="hero2-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h2>Shop by <span>Category</span></h2>
        <p>Everything your pond needs in one place</p>
      </motion.div>

      {/* CARDS */}
      <div className="hero2-cards">

        <motion.div
          className="card card1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          transition={{ duration: 0.6 }}
        >
          <div className="card-icon">
            <i className="fa-solid fa-stethoscope"></i>
          </div>
          <h3>Fish Medicines</h3>
          <p>Treat fungal, bacterial and oxygen problems</p>
        </motion.div>

        <motion.div
          className="card card2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="card-icon">
            <i className="fa-solid fa-wheat-awn"></i>
          </div>
          <h3>Fish Feed</h3>
          <p>Growth, nursery and immunity boosters</p>
        </motion.div>

        <motion.div
          className="card card3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
          transition={{ duration: 0.6 }}
        >
          <div className="card-icon">
            <i className="fa-solid fa-flask"></i>
          </div>
          <h3>Pond Treatment Chemicals</h3>
          <p>Water clarity, pH and algae control</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero2;