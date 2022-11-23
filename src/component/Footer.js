import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h3>Download our App</h3>
        <p>Download For Android And ios Mobile Phone.</p>
        <div className="app-logo">
          <a href="https://play.google.com/store/games">
            <img src="assets/logo3.webp" />
          </a>
          <br />
          <a href="https://www.apple.com/app-store/">
            <img src="assets/logo4.png" />
          </a>
        </div>
      </div>
      <div className="footer-col-2">
        <img src="images/logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur iste consequuntur ipsa temporibus. Asperiores, quas
          eveniet. Ratione eligendi accusamus quaerat fugiat animi, veritatis
          temporibus laudantium quam rerum harum ea.
        </p>
      </div>
      <div className="footer-col-3">
        <h3>USEFUL LINKS</h3>
        <ul>
          <li>Contact Us</li>
          <li>Returns</li>
          <li>Shipping</li>
          <li>cancellation</li>
          <li>Returns</li>
        </ul>
      </div>
      <div className="footer-col-4">
        {/* <h3>KEEP IN TOUCH</h3> */}
        <a href="https://www.facebook.com/login.php" className="fa fa-facebook"></a>
<a target="_blank" href="https://twitter.com/i/flow/login" className="fa fa-twitter"></a>
<a target="_blank"  href="https://www.google.co.in/" className="fa fa-google"></a>
<a target="_blank" href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" className="fa fa-linkedin"></a>
<a target="_blank" href="https://www.youtube.com/" className="fa fa-youtube"></a>
<a target="_blank" href="https://www.instagram.com/?hl=en" className="fa fa-instagram"></a>
        
        {/* <ul>
          <li>
          
            <a href="https://www.facebook.com/login.php">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en-in">Twitter</a>
          </li>
          <li>
            <a href="https://www.youtube.com/">Youtube</a>
          </li>
        </ul> */}
      </div>
    </div>
    <hr />
    <p className="copyright">
      © 1996-2022, letsshop.com, Inc. or its affiliates
    </p>
  </div>
</div>

    </>
  )
}

export default Footer