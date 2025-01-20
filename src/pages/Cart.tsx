import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export default function Cart() {
  const cartData = useSelector((state: RootState) => state.counter.cartItems);
  return (
    <div>
      {cartData?.map((item) => (
        <div className="flex items-center gap-3 border-2">
          <img src={item.images[0]} className=" size-32" loading="lazy" />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
