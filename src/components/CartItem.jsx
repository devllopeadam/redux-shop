/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const [disabled, setDisabled] = useState(true);

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  const hanldeUpdateFromCart = () => {
    dispatch({
      type: "UPDATE_FROM_CART",
      payload: { id: product.id, quantity: quantity },
    });
    setDisabled(true);
  };

  return (
    <li
      key={product.id}
      className="flex items-center space-x-4 bg-[#fafafa] px-5 py-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <div className="text-gray-600 font-medium flex items-center gap-4">
          <span>Quantity: </span>
          <input
            type="number"
            className="w-12 px-2 py-1 border border-gray-300 rounded-md"
            disabled={disabled}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ml-1">
        <button
          onClick={() => handleRemoveFromCart(product.id)}
          className="bg-red-500 text-white px-1 py-1 rounded-md text-sm font-semibold">
          Remove
        </button>
        <button
          onClick={() => {
            if (!disabled) {
              hanldeUpdateFromCart();
            } else {
              setDisabled(false);
            }
          }}
          className="bg-blue-500 px-1 py-1 text-white rounded-md text-sm font-semibold">
          {disabled ? "Update" : "Save"}
        </button>
      </div>
    </li>
  );
};

export default CartItem;
