"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => console.log("Adding to cart...")}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
