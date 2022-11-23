import React from 'react'
import About from './About'
import Footer from './Footer'
import Products from './Products'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <div className='hero'>
    <div className="card text-bg-dark text-white border-0">
  <img src="assets/bg5.jpg" className="card-img" alt="background" height="650px"/>
  <div className="card-img-overlay ">
  <div className="container">
  <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <h2 className="card-text lead fs-2">
    CHECK OUT ALL THE TRENDS
    </h2>
  </div>
    
  </div>
</div>

<Products/>
<About/>
<Testimonial/>
<Footer/>
    </div>
  )
}

export default Home