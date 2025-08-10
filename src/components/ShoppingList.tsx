import { useState, useEffect } from "react";
import { MdError } from "react-icons/md";
import type { Nullable, Product } from "../types";
import ProductCard from "./ProductCard";
const ShoppingList = () => {
  const [products, setProducts] = useState<Nullable<Product[]>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Nullable<string>>(null);

    useEffect(() => {
        setTimeout(() => {
          
            fetch("http://localhost:5050/products")
            .then((res) => {
                if (!res.ok) throw new Error("Impossible to fetch data"); // I could have something more granular
                return res.json();
            })
            .then((res) => setProducts(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
        },2000)
        }, []);
        
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
                      products.map((product, index) => (<ProductCard product={product} key={index} />
              
            ))}
        </div>
      )}
    </>
  );
};

export default ShoppingList;
