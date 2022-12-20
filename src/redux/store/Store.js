import { configureStore } from '@reduxjs/toolkit'
import AddToCart from '../slice/AddToCartSlice'

export default configureStore({
  reducer:{ counter: AddToCart}
})