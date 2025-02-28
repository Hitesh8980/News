import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/categorySlice";

const categories = ["All", "Tech", "Business", "Sports"];

const CategorySelector = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          style={{
            margin: "5px",
            padding: "8px 12px",
            background: selectedCategory === category ? "blue" : "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
