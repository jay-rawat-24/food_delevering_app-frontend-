import React from 'react'
import "../../styles/about.scss"
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import newcolor from "../../assets/newcolor.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Perk Up Cafe</h4>
          <p>
          a culinary paradise that will take your taste buds on a sensational journey. Our restaurant embodies a perfect blend of exquisite flavors, impeccable service, and a warm, inviting ambiance. Step inside and be captivated by the aromas that fill the air, as our skilled chefs create masterpieces from the freshest, locally sourced ingredients. Whether you're craving a mouthwatering steak, indulgent seafood, or innovative vegetarian dishes, our diverse menu caters to every palate. Our knowledgeable staff is dedicated to ensuring a memorable dining experience, providing personalized recommendations and attentively tending to your needs. 
          </p>

          <p>
            Explore the various type of food . Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={newcolor} alt="Founder" />
              <h3>Jayditya</h3>
            </div>

            <p>
              I am Jayaditya, the founder of Perk Up Cafe  . Affiliated to
              Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  )
}

export default About
