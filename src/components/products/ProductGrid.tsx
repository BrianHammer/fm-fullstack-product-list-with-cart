import Image from "next/image";
import React from "react";
import ProductItem from "../products/ProductItem";
import { getProducts } from "@/actions/products";

type Props = {};

const ProductGrid = (props: Props) => {
  const products = getProducts();

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold">Desserts</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 items-center justify-center">
        {products.map((product) => (
          <ProductItem
            key={product.name}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
