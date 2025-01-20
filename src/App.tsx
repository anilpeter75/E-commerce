import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Layout/Navbar";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <ProductPage />
        <Cart/>
      </div>
      {/* adada{counter}
  <button onClick={()=>dispatch(increment())}>increment</button>
  <button onClick={()=>dispatch(decrement())}>decrement</button> */}
  <p className="text-center h-36 bg-slate-200">Footer</p>
    </>
  );
}
