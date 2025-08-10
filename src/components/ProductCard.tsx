import type { ProductCardProps } from "../types";

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-blue-900 flex flex-col px-2">
			<img
				src={product.image}
				alt={product.description}
				className="h-40 rounded object-cover mb-4"
			/>
			<h2 className="text-xl font-semibold">{product.name}</h2>{" "}
			<p className="text-gray-500 text-sm mb-2">{product.description}</p>
			<p className="font-bold text-lg">{product.price.toFixed(2)}€</p>
		</div>
	);
};

export default ProductCard;
