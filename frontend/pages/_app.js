import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {useEffect, useState} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("I am useeffect from app.js")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setreloadKey] = useState(1)
  const addToCart = (item, qty, price) => {
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      const element = qty;
      newCart.push([item, price])
    }
    console.log('add to cart', newCart)
    setCart(newCart)
    setreloadKey(Math.random())
  }
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }
  const clearCart = (item) => {
    
  }
  return <><Navbar key={reloadKey} cart={cart}/><Component cart={cart} addToCart={addToCart} removeFromCart= {removeFromCart} clearCart={clearCart} {...pageProps} /></>
}

export default MyApp
