import { createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Product {
  id: number
  name: string
  image: string
  price: number
}

interface CartItem extends Product {
  quantity: number
}

interface ProductState {
  products: Product[]
  cart: CartItem[]
}

const initialState = {
  products: [
    {
      id: 1,
      name: "Fresh Strawberry",
      image: "pro-1.png",
      price: 20000,
    },
    {
      id: 2,
      name: "Organic Cabbage",
      image: "pro-2.png",
      price: 40000,
    },
    {
      id: 3,
      name: "Wild Pecan Nuts",
      image: "pro-3.png",
      price: 20000,
    },
    {
      id: 4,
      name: "Green Bow",
      image: "pro-4.png",
      price: 20000,
    },
    {
      id: 5,
      name: "Vegetable",
      image: "pro-5.png",
      price: 20000,
    },
    {
      id: 6,
      name: "Purple Cabbage",
      image: "pro-6.png",
      price: 20000,
    },
  ],
  cart: [],
}

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(pro => pro.id === action.payload)
      if (product) {
        const exist = state.cart.find(pro => pro.id === product.id)
        if (exist) {
          exist.quantity += 1
        } else {
          state.cart = [...state.cart, { ...product, quantity: 1 }]
        }
      }
    },

    removeFromCart: (state, action) => {
      const product = state.products.find(pro => pro.id === action.payload)
      if (product) {
        state.cart = state.cart.filter(pro => pro.id !== action.payload)
      }
    },

    incCart: (state, action) => {
      const product = state.cart.find(cart => cart.id === action.payload)
      product.quantity += 1
    },

    decCart: (state, action) => {
      const product = state.cart.find(cart => cart.id === action.payload)
      product.quantity = product.quantity > 1 ? product.quantity - 1 : 1
    },

    clearCart: state => {
      state.cart = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart, incCart, decCart } =
  ProductSlice.actions
export default ProductSlice.reducer
