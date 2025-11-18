import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../../stores/cartSlice'

export default function CartPage() {

  const cart = useSelector(state => {
    return state.cart
  })
  const dispatch = useDispatch()

  return (
    <div>
      {cart.map(item => (
        <div>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={()=>dispatch(deleteFromCart(item))}>Удалить</button>
        </div>
      ))}

    </div>
  )
}
