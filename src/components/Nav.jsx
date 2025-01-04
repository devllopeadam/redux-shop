import { Home, Boxes, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="flex-shrink-0">
              <span className="text-xl font-bold">E-Shop</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1">
                  <Home
                    className="inline-block mr-1"
                    size={18}
                  />
                  Home
                </Link>
                <Link
                  to="/products"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1">
                  <Boxes
                    className="inline-block mr-1"
                    size={18}
                  />
                  Products
                </Link>
                <Link
                  to="/cart"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center gap-1">
                  <ShoppingCart
                    className="inline-block mr-1"
                    size={18}
                  />
                  Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              <Home
                className="inline-block mr-2"
                size={18}
              />
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              <Boxes
                className="inline-block mr-2"
                size={18}
              />
              Products
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              <ShoppingCart
                className="inline-block mr-2"
                size={18}
              />
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
