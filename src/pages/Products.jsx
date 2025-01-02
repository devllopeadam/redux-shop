/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../components/Product";
import FilterSeachBar from "../components/FilterSeachBar";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <FilterSeachBar />
      <div className="grid grid-cols-3 gap-6">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
