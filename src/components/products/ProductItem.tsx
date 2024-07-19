import Image from "next/image";
import React from "react";
import OrderButton from "./OrderButton";
import { formatCurrency } from "@/lib/formatter";
type Props = {
  name: string;
  imageUrl: string;
  category: string;
  price: number;
};

const ProductItem = ({ name, imageUrl, category, price }: Props) => {
  return (
    <div className="space-y-8">
      <div className=" w-full h-56 relative ">
        {/** TODO: Determine if this container is necessary */}
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full rounded-lg"
            src={imageUrl}
            alt="Waffle Image"
            fill
            objectFit="cover"
          />
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-center translate-y-1/2">
            <OrderButton />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-rosey-500 font-thin">{category}</p>
        <p className="text-rosey-900 ">{name}</p>
        <p className="text-red">{formatCurrency( price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
