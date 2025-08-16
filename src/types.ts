import type { ReactNode } from "react";

export type Nullable<T> = T | null;
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: string;
  category: string;
  rating: number;
  image: string;
};
export type QuantifiedProduct = Prettify<Product & { qty: number }>;

export type ProductCardProps = { product: Product };
export type ProductProviderProps = { children: ReactNode };
export type ProductContextProviderProps = {
  products: Nullable<Product[]>;
  loading: boolean;
  error: Nullable<string>;
};

export type CartProviderProps = { children: ReactNode };
export type CartContextProviderProps = {
  cart: Nullable<QuantifiedProduct[]>;
  addToCart: Function;
  removeFromCart: Function
};
export type Prettify<T> = { [K in keyof T]: T[K] } & {};
