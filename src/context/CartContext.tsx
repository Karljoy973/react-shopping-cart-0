import { createContext, useContext, useState, useEffect } from "react";
import type {
	CartProviderProps,
	CartContextProviderProps,
	Product,
	QuantifiedProduct,
} from "../types";

export const CartContext = createContext<CartContextProviderProps>({
	cart: null,
	addToCart: Function,
	removeFromCart: Function,
});
export const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<QuantifiedProduct[]>(() => {
		const stored = localStorage.getItem("cart");
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		if (!!cart)
			localStorage.setItem("cart", JSON.stringify(cart as Product[]));
	}, [cart]);

	const addToCart = (product: Product) => {
		setCart((previous) => {
			const productExist = previous.find(
				(item) => item.id === product.id
			);
			if (!!productExist) {
				return previous.map((item) =>
					item.id === product.id
						? { ...item, qty: item.qty + 1 }
						: item
				);
			}

			return [...previous, { ...product, qty: 1 }];
		});
	};

	const removeFromCart = (id: string) => {
		setCart((prev) => prev.filter((product) => product.id != id));
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}{" "}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
