import React from "react";
import "./ProductCard.css";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="card border border-indigo-600 border-opacity-20">
      <div className="w-full h-[300px] ">
        <img className="w-full h-full p-5" src={item.img} alt="" />
      </div>
      <div className=" h-[150px] px-4 py-5">
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="card-info my-2">{item?.title}</p>
        <div className="flex gap-2 my-4 ml-[50px] ">
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
      <button className="card-btn  bg-orange-700 mx-auto justify-center flex whitespace-nowrap items-center gap-2">
        <MdOutlineShoppingBag className="text-xl" />
        <span className="mt-[2px] font-semibold">Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
