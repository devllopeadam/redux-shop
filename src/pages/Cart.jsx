import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setSubTotal(cart.reduce((a, c) => a + c.price * parseInt(c.quantity), 0));
    setTotalQuantity(cart.reduce((a, c) => a + parseInt(c.quantity), 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center text-3xl font-medium">
          Your cart is empty 🤨
        </p>
      )}
      {cart.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-medium mt-10">
            Total Quantity:{" "}
            <span className="text-indigo-400 ">{totalQuantity}</span>
          </h1>
          <h1 className="text-3xl font-medium mt-10">
            Subtotal: <span className="text-indigo-400 ">${subTotal}</span>
          </h1>
          <button
            onClick={() => dispatch({ type: "CHECKOUT_CART" })}
            className="bg-indigo-400 px-10 py-3 rounded-md shadow-md text-white mx-auto mt-10">
            Checkout
          </button>
        </div>
      )}
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default Cart;
