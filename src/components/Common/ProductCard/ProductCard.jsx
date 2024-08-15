import React from "react";
import "./ProductCard.css";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";

const ProductCard = ({ item }) => {
  return (
    <div className="card border border-indigo-600 border-opacity-20">
      <div className="w-full h-[300px] p-3">
        <img className="w-full h-full" src={item.img} alt="" />
      </div>
      <div className=" h-[150px] px-4 py-5">
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="card-info">
         {item?.name}
        </p>
        <div className="flex gap-2 my-2">
          <del className="text-xl">$99.99</del>
          <p>$80.99</p>
        </div>
      </div>
      <div className="card-icon flex flex-col gap-5">
        <FaShoppingCart size={30} />
        <GiRecycle size={30} />
        <FaRegHeart size={30} />
        {/* <FaShoppingCart className="text-2xl" /> */}
      </div>
      <button className="card-btn text-white bg-indigo-700">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
