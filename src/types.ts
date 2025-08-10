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

export type ProductCardProps = {product: Product}
