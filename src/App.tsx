import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { increment } from "./state/counter/couterSlice";
export default function App() {
  const counter=  useSelector((state:RootState)=>state.counter.value)
  const dispatch=useDispatch( )

  return <div>adada{counter}
  <button onClick={()=>dispatch(increment())}>increment</button>
  </div>;
}
