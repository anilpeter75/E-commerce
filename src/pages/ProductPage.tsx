import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import {
  AddtoCart,
  decrement,
  increment,
  setProducts,
} from "../state/counter/cartSlice";
// import { setProducts } from "../state/counter/productSlice";

interface Productprops {
  id: number;
  title: string;
  images: string[];
  price: string;
  qty: number;
}

export default function ProductPage() {
  // const counter = useSelector((state: RootState) => state.counter.value);
  const products = useSelector(
    (state: RootState) => state.counter.products
  ) as Productprops[];
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=20&skip=10&select=title,price,images"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);
  if (products?.length==0){
    return(
      <p>Loading</p>
    )
  }
  return (
    <div className="grid grid-cols-4 gap-5 flex-wrap m-4">
      {products?.map((item) => (
        <div
          key={item.id}
          className="border-2 p-5 gap-2 flex flex-col justify-center items-center"
        >
          <img src={item.images[0]} className=" size-32" loading="lazy" />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <div className="flex items-center gap-4">
            <div className=" flex gap-3 items-center border-2 rounded-lg p-1">
              <img
                src={minus}
                className="size-5 border-r-2"
                onClick={() => dispatch(decrement(item.id))}
              />
              {item.qty}
              <img
                src={plus}
                className="size-5 border-l-2"
                onClick={() => dispatch(increment(item.id))}
              />
            </div>
            <button
              className="bg-blue-500 text-white text-xs p-3"
              onClick={() => dispatch(AddtoCart(item))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
