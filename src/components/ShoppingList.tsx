import { MdError } from "react-icons/md";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";
import type { ProductContextProviderProps } from "../types";
const ShoppingList = () => {
  const { products, loading, error }: ProductContextProviderProps =
    useProducts();

  return (
    <>
      {loading && <p>Loading ...</p>}
      {error && (
        <p
          className="
        flex
          justify-start
          align-middle
          items-start
        "
        >
          <MdError /> {error}{" "}
        </p>
      )}
      {!!products && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {!loading &&
            !error &&
            !!products &&
            products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default ShoppingList;
