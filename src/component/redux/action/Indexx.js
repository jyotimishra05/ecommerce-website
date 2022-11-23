// import React from 'react'
//for add item to the cart
export const addtocart = (product) => {
  return {
    type:"ADDITEM",
    payload:product
  }
   
  
}

export const delcart = (product) => {
    return {
      type:"DELETEITEM",
      payload:product
    }
     
    
  }

