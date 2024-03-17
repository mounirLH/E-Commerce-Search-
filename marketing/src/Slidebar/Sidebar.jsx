import React from 'react'
import './Sidebar.css'
import Price from './Price/Price'
import Category from './Category/Category'
import Colors from './Colors/Colors'

function Sidebar() {
  return (
    <section className='sidebar'>
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category/>
        <Price/>
        <Colors/>
    </section>

  )
}

export default Sidebar