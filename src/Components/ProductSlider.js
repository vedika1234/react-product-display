import React from "react";

import ProductCard from "./ProductCard";

const ProductSlider = ({ items, brand }) => {
  return <>
    <div className={'company-name-header'}>{brand}</div>
    <hr></hr>
    <div className="product-slider">
      {items.map((product) => <ProductCard product={product} />)}
    </div></>;

};

export default ProductSlider;
