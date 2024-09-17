import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai"
import "../../styles/footer.scss"

const Footer = () => {
  return (
    <>
    <footer>
    <div>
      <h2> Perk Up Cafe</h2>
      <p>From our kitchen to your table, we committed to serving you the freshest and most flavorful food and drink</p>
      <br />
      <em>We give attention to genuine feedback </em>
      <strong>All right received      @Perk Up Cafe</strong>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href="https://chat.openai.com/"><AiFillGithub/></a>
        <a href="https://chat.openai.com/"><AiFillYoutube/></a>
        <a href="https://chat.openai.com/"><AiFillInstagram/></a>
    </aside>
    </footer>
    </>
  )
}

export default Footer
