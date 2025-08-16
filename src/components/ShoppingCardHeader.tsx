import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import type { Product } from "../types";

const ShoppingCartHeader = () => {
  const { cart, removeFromCart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const totalPrice = cart
    ? cart
        .map((item) => item.qty * item.price)
        .reduce((curr, acc) => acc + curr, 0)
        .toFixed(2)
    : Number(0).toFixed(2);
  const itemCount = cart
    ? cart.map((item) => item.qty).reduce((curr, acc) => acc + curr, 0)
    : 0;
  
  
  return (
    <>
      <header
        className="
        bg-white 
        text-blue-700
        flex
        justify-between
        mx-3
        my-2
        font-semibold
        "
      >
        ShopNow
        <div
          className="w-10 
        h-10 rounded-4xl
        bg-blue-600
        text-white flex
        items-center
        justify-center
        relative
        text-lg
        "
        >
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer"
          >
            <FaCartArrowDown />
            {itemCount > 0 && (
              <span
                className="
                absolute
                -top-1
                -right-1
                bg-blue-800
                text-white
                text-xs
                w-5
                h-5
                flex
                items-center-safe
                justify-center-safe
                rounded-xl
                "
              >
                {" "}
                {itemCount}
              </span>
            )}
          </button>
          {showDropdown && (
            <div
              className="absolute right-0 top-7
                 mt-2 w-80 bg-white border rounded shadow-lg z-50"
            >
              <div className="p-4">
                <div className="font-semibold text-lg mb-2 text-black">
                  <h2>Cart Items</h2>

                  {!!cart && cart.length == 0 ? (
                    <>
                      <p className="text-sm text-gray-400 font-semibold">
                        No product in the cart
                      </p>
                    </>
                                  ) : (<>
                    <ul className="flex flex-col justify-between max-h-60 overflow-y-auto divide-y divide-gray-200">
                      {(cart as Product[]).map((product) => (
                          <li
                          className="flex justify-between items-center h-10 text-sm"
                          key={product.id}
                          >
                              <p>
                          {product.name} 
                                  
                              </p>
                              <p className="text-gray-600 text-xs">
                            {product.quantity} x  {product.price} €</p>
                          <button className="cursor-pointer"  onClick={() => removeFromCart(product.id)}><MdOutlineDeleteForever /></button>
                        </li>
                      ))}
                                          </ul>
                                          <p>{itemCount} Produits - total : {totalPrice }€</p>
                      </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default ShoppingCartHeader;
