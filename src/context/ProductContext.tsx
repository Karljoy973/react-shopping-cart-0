import { createContext, useState, useEffect, useContext } from "react";
import type {
  Product,
  Nullable,
  ProductProviderProps,
  ProductContextProviderProps,
} from "../types";

const ProductContext = createContext<ProductContextProviderProps>({
  products: null,
  loading: true,
  error: null,
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Nullable<Product[]>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Nullable<string>>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/api/products")
			.then((res) => {
				if (!res.ok) throw new Error("Impossible to fetch data"); // I could have something more granular
				return res.json();
			})
			.then((res) => res.products)
			.then((res) => setProducts(res))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
    }, 2000);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
