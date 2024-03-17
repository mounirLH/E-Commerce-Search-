import React from 'react'
import { FaStar } from "react-icons/fa"
import { BsFillBagHeartFill } from "react-icons/bs";

function Cards() {
  return (
    <section className="card">
    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe"
    className='card-img' />
    <div className="card-detail"></div>
    <h3 className="card-title">Shoe</h3>
    <section className="card-reviews">
      <FaStar className='ratings-start'/>
      <FaStar className='ratings-start'/>
      <FaStar className='ratings-start'/>
      <FaStar  className='ratings-start'/>
      <span className="total-reviws">4</span>
    </section>
    <section className="card-price">
      <div className="price">
        <del>$300</del> 200
      </div>
      <div className="bag-icon">
        <BsFillBagHeartFill/>
      </div>
    </section>
  </section>
  )
}

export default Cards