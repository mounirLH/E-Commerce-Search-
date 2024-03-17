import  React from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommanded from './Recommanded/Recommanded'
import Sidebar from './Slidebar/Sidebar'


function app() {
  return (
    <>
    
    <Sidebar/>
    <Navigation/>
    <Recommanded/>
    <Products/>
    
    </>
  )
}

export default app