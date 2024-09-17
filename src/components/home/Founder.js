import React from "react";
// import "./styles/founder.scss"
import { motion } from "framer-motion";
import middleimg from "../../assets/home_2.webp";
import "../../styles/founder.scss"

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={middleimg} alt="...loading" height={300} width={300} />
        <p>
          "Bringing the world's flavors to your doorstep - order now and indulge
          in a culinary adventure with our hassle-free food delivery service."
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
