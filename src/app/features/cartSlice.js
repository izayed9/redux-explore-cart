import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartProductsIds:[]
  },
  reducers: {
    addToCart:(state, actions)=>{
        state.cartProductsIds = [actions.payload, ...state.cartProductsIds]
    },
    removeFromCart:(state, actions)=>{
        const indexOfId = state.cartProductsIds.indexOf(actions.payload);
        state.cartProductsIds.splice(indexOfId, 1)
    },
    clearAllCart:(state)=>{
       state.cartProductsIds=[]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearAllCart } = cartSlice.actions

export default cartSlice.reducer