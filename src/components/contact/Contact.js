import React from "react";
import { motion } from "framer-motion";
import all from "../../assets/allindia.jpg";
import "../../styles/contact.scss"

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
            x:"-100vw",
            opacity:0,
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            delay:0.2
        }}
      >
        <h2>Contact Us</h2>
        
        <input type="email" placeholder="Email" />
        {/* <input type="text" placeholder="Email" /> */}

        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>

      <motion.div className="form_border"
        initial={{
            x:"100vw",
            opacity:0,
        }}
        animate={{
            x:0,
            opacity:1
        }}
        
      >     
          <motion.div>
            <img src={all} alt="loading...." />
          </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
