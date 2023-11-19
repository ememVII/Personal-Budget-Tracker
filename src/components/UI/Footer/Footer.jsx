import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <h3>Copyright © 2023 Designed by Mahmoud Magdy.</h3>
      <div className="footer__icons">
        <a href="https://www.facebook.com/ememVII" target="_blank">
          <i className="fa-solid fa-heart"></i>
        </a>
        <a href="https://www.facebook.com/ememVII" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/ememVII" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}
