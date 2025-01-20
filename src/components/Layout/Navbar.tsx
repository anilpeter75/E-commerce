import React from "react";
import Cart from "../../assets/cart.svg";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../../state/store";
export default function Navbar() {
  const cartQty = useSelector((state: RootState) => state.counter.totalqty);
  return (
    <div className="fixed inset-0 h-16 bg-[#80808069] ">
      <div className="flex justify-between items-center h-16 mx-20">
        <p>Home</p>
        <div className=" relative">
          <img src={Cart} alt="Cart" className=" size-10" />
          <span className=" absolute -top-1 -right-1 text-red-500 font-bold">{cartQty}</span>
        </div>
      </div>
    </div>
  );
}
