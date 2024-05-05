import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="card card-bordered w-[150px] shadow-xl mr-5 mb-5">
      <div className="card-body">
        <div className="card-title">Product</div>
        <div className="card-actions justify-center">
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
