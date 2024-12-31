import React from "react";
import GoodsCard from "./GoodsCard";

const ProductGallery = () => {
  const products = [
    {
      name: "Socks",
      price: 100,
      image: "/socks.jpg",
    },
    {
      name: "Bag",
      price: 650,
      image: "/bag.jpg",
    },
    {
      name: "Mask",
      price: 100,
      image: "/mask.jpg",
    },
    {
      name: "Shoes",
      price: 1000,
      image: "/shoes.jpg",
    },
    {
      name: "Skirt",
      price: 700,
      image: "/skirt.jpg",
    },
    {
      name: "Underwear",
      price: 200,
      image: "/underwear.jpg",
    },
  ];

  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <GoodsCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
