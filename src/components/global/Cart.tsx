import Image from "next/image";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  const orderItems: string[] | null = ["hi"];

  return (
    <div className="bg-white px-8 py-8 rounded-xl space-y-6">
      <h3 className="font-c-bold text-2xl text-red">Your Cart (0)</h3>
      {orderItems.length === 0 && (
        <>
          <div className=" flex items-center justify-center">
            <Image
              className="text-rosey-500"
              draggable="false"
              src="/images/illustration-empty-cart.svg"
              alt="Empty Shopping Cart"
              height={200}
              width={200}
            />
          </div>

          <p className="text-center text-rosey-500">
            Your added items will appear here
          </p>
        </>
      )}
      {orderItems && (
        <>
          <ul className="flex flex-col">
            <li className="flex flex-row justify-between items-center border-b-[1px] p-4">
              <div className="flex flex-col gap-1">
                <p className="text-rosey-900">Classic Tiramisu</p>
                <div className="flex flex-row gap-2">
                  <p className="text-red">4x</p>
                  <p className="font-light text-rosey-500">@$2.50</p>
                  <p className="text-rosey-900 font-normal">$10.00</p>
                </div>
              </div>
              <button className="w-5 h-5 rounded-full border-2 border-rosey-300 text-rosey-300 flex items-center justify-center">
                <Image
                  className=""
                  src="/images/icon-remove-item.svg"
                  height={12}
                  width={12}
                  alt="cancel"
                />
              </button>
            </li>

            <li className="flex flex-row justify-between items-center border-b-[1px] p-4">
              <div className="flex flex-col gap-1">
                <p className="text-rosey-900">Classic Tiramisu</p>
                <div className="flex flex-row gap-2">
                  <p className="text-red">4x</p>
                  <p className="font-light text-rosey-500">@$2.50</p>
                  <p className="text-rosey-900 font-normal">$10.00</p>
                </div>
              </div>
              <button className="w-5 h-5 rounded-full border-2 border-rosey-300 text-rosey-300 flex items-center justify-center">
                <Image
                  className=""
                  src="/images/icon-remove-item.svg"
                  height={12}
                  width={12}
                  alt="cancel"
                />
              </button>
            </li>

            <li className="flex flex-row justify-between items-center border-b-[1px] p-4">
              <div className="flex flex-col gap-1">
                <p className="text-rosey-900">Classic Tiramisu</p>
                <div className="flex flex-row gap-2">
                  <p className="text-red">4x</p>
                  <p className="font-light text-rosey-500">@$2.50</p>
                  <p className="text-rosey-900 font-normal">$10.00</p>
                </div>
              </div>
              <button className="w-5 h-5 rounded-full border-2 border-rosey-300 text-rosey-300 flex items-center justify-center">
                <Image
                  className=""
                  src="/images/icon-remove-item.svg"
                  height={12}
                  width={12}
                  alt="cancel"
                />
              </button>
            </li>
          </ul>
          <div className="flex flex-row justify-between items-center">
            <p className="">Order Total</p>
            <p className="text-2xl font-c-bold">$46.50</p>
          </div>

          <div className="p-4 bg-rosey-50 rounded-xl flex items-center justify-center gap-2">
            <Image
              src="/images/icon-carbon-neutral.svg"
              width={24}
              height={24}
              alt="Plant"
            />
            <span className="font-c-light">
              This is a <span className="font-c-normal">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <button className="p-4 bg-red w-full text-white font-c-bold rounded-full">
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
