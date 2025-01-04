import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterSeachBar = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className="flex items-center gap-10">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium">Filter by category</label>
        <select
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.value })
          }
          className="px-3 py-2 border border-gray-300 rounded-md outline-none">
          <option value="All">All</option>
          {categories.map((category) => (
            <option
              className="px-2"
              key={category}
              value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium">Sort by price</label>
        <select
          onChange={() =>
            dispatch({ type: "FILTER_BY_PRICE", payload: event.target.value })
          }
          className="px-3 py-2 border border-gray-300 rounded-md outline-none">
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSeachBar;
