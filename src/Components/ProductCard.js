import React from "react";

const ProductCard = ({ product }) => {
  return <><div className={'product-card-wrapper'}>

    <div className={'product-card-image'}>
      <img src={product.image} className="product-image" />
    </div>
    <div className={'product-card-name'}>
      <p>{product.product_name}</p>
      <p>{product.brand_name}</p>
      <p>{product.price}</p>
    </div>
    <div className={'product-card-desc'}>
      <span>{product.address.city + ', ' + product.address.state}</span>
      <span>{product.time}</span>
      <span>{product.discription}</span>
    </div>
  </div></>;
};

export default ProductCard;