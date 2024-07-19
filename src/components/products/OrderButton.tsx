"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {

}

const OrderButton = () => {
  const [orderNumber, setOrderNumber] = useState(0);

  const incrementOrderNumber = () => {
    setOrderNumber((number) => number + 1);
  };
  const decrementOrderNumber = () => {
    setOrderNumber((number) => number - 1);
  };

  return (
    <>
      {orderNumber === 0 ? (
        <button
          className="p-3 w-40 flex items-center justify-center gap-2 rounded-full bg-white border-rosey-400 border-[1px]"
          onClick={incrementOrderNumber}
        >
          <Image
            src="/images/icon-add-to-cart.svg"
            alt="icon"
            height={24}
            width={24}
          />
          <span>Add To Cart</span>
        </button>
      ) : (
        <div className="py-3 px-3 w-40 flex items-center justify-between gap-2 rounded-full bg-red text-white">
          <button
            onClick={decrementOrderNumber}
            className="w-6 h-6 flex items-center justify-center rounded-full border-2 "
          >
            <Image
              className=""
              alt="-"
              src="/images/icon-decrement-quantity.svg"
              height={12}
              width={12}
            />
          </button>

          <span>{orderNumber}</span>
          <button
            onClick={incrementOrderNumber}
            className="w-6 h-6 flex items-center justify-center rounded-full border-2 "
          >
            <Image
              className=""
              alt="-"
              src="/images/icon-increment-quantity.svg"
              height={12}
              width={12}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default OrderButton;
