import React from 'react'
import './Recommanded.css'

function Recommanded() {
  return (
    <>
    <div>
      <h2 className='Recommanded-title'>Recommanded</h2>
      <div className="Recommanded-flex">
        <button className='btns'>All products</button>
        <button className='btns'>Nike</button>
        <button className='btns'>Adidas</button>
        <button className='btns'>Puma</button>
        <button className='btns'>Vans</button>
      </div>
    </div>
    </>
  )
}

export default Recommanded