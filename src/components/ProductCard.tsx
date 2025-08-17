import { useCart } from "../context/CartContext";
import type { ProductCardProps } from "../types";
import { TiShoppingCart } from "react-icons/ti";

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
		<div className="bg-white rounded-lg shadow-blue-900 flex flex-col px-2">
			<img
				src={product.image}
				alt={product.description}
				loading="lazy"
				className="h-40 rounded object-cover mb-4"
			/>
			<h2 className="text-xl font-semibold">{product.name}</h2>{" "}
			<p className="text-gray-500 text-sm mb-2">{product.description}</p>
			<p className="font-bold text-lg">{product.price.toFixed(2)}€</p>
			<button
				aria-label="add-product"
				onClick={() => addToCart(product)}
				className="bg-blue-600 
				text-white
				hover:bg-blue-700
				rounded
				flex
				items-center
				justify-center-safe
				mx-4
				my-2 py-3">
				<TiShoppingCart /> Add to cart
			</button>
		</div>
  );
};

export default ProductCard;
