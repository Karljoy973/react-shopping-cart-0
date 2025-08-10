import { createContext, useContext } from "react";
import type {
  CartProviderProps,
  CartContextProviderProps,
} from "../types";

export const CartContext = createContext<CartContextProviderProps>({
  cart: [],
});
export const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <CartContext.Provider value={{ cart: [] }}>
      {children}{" "}
    </CartContext.Provider>
  );
};

export const useCart = useContext(CartContext)
