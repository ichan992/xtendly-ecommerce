import React, { useReducer} from "react";
import { CartContext }  from '../context/CartContext'
export default function CartProvider({children}) {

  const cartReducer = (state , action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const duplicateIndex = state.findIndex(
          (cartItem) => cartItem.slug === action.item.slug 
        );
        if (duplicateIndex > -1) {
          const newState = [...state];
          newState[duplicateIndex] = {
            ...newState[duplicateIndex],
            qty: newState[duplicateIndex].qty + action.item.qty,
          };
          return newState;
        } else {

          return [...state, action.item];
        }
      case "REMOVE_FROM_CART":
        return state.filter((item) => item.slug !== action.value.slug)
      case "UPDATE_CART" :
        const cartItemIndex = state.findIndex(
          (cartItem) => cartItem.slug === action.item.slug
        );
        if (cartItemIndex > -1) {
          const newState = [...state];
          newState[cartItemIndex] = {
            ...newState[cartItemIndex],
            qty: newState[cartItemIndex].qty = action.qty,
          };
          return newState;
        } else {
          return [...state, action.item];
        }
      default:
        return state;
    }
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider
     value={{
        cartState,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
