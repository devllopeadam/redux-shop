import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/actions";

/* eslint-disable react/prop-types */
export const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const hanldeAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, quantity: quantity },
    });
  };

  return (
    <div
      key={product.id}
      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 space-y-2">
        <img
          src={product.image}
          className="h-48 w-full object-contain"
        />
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h1>
        <p className="text-sm text-gray-600 overflow-hidden">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold text-lg">
            ${product.price}
          </span>
          <div className="flex flex-items gap-4">
            <input
              type="number"
              max={10}
              min={1}
              name="quantity"
              className="w-12 px-2 py-1 border border-gray-300 rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={hanldeAddToCart}
              className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
