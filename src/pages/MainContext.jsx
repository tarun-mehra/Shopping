import React, { createContext, useEffect, useState } from 'react'
export let myContext = createContext()



export default function MainContext({ children }) {
  let [count,setCount] = useState(0)
  let [cart,setCart] = useState([])
  let obj = {cart,setCart}

  useEffect(()=>{
    localStorage.setItem("CART",JSON.stringify(cart))
  },[cart])
  return (
    <myContext.Provider value={obj} >
      {children}
    </myContext.Provider>
  )
}
