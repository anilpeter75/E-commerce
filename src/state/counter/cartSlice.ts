import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  products: [];
  cartItems: [];
  totalqty: number;
  totalprice: number;
}
interface Productprops {
  id: number;
  title: string;
  images: string[];
  price: string;
}
const initialState: counterState = {
  products: [],
  cartItems: [],
  totalqty: 0,
  totalprice: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map((item: Productprops) => ({
        ...item,
        qty: 0,
      }));
    },
    increment: (state, action) => {
      const payloadId = action.payload;
      const findItem = state.products.find(
        (item: Productprops) => item.id === payloadId
      );
      // console.log({...findItem});
      if (findItem) {
        findItem.qty++;
      }
    },
    decrement: (state, action) => {
      const payloadId = action.payload;
      const findItem = state.products.find(
        (item: Productprops) => item.id === payloadId
      );

      if (findItem && findItem.qty && findItem.qty > 0) {
        findItem.qty--; // Decrement qty only if it's greater than 0
      }
    },
    AddtoCart: (state, action) => {
      const PayloadItem = action.payload;
      const existingCartItem = state.cartItems.find(
        (item: Productprops) => item.id === PayloadItem.id
      );

      if (existingCartItem) {
        existingCartItem.qty++;
      } else {
        state.cartItems.push({ ...PayloadItem });
      }
      state.totalqty += PayloadItem.qty;
      state.totalprice += parseFloat(PayloadItem.price);
      const incrementFinder = state.products.find(
        (item) => item.id == PayloadItem.id
      );
      if (incrementFinder) {
        incrementFinder.qty = 0;
      }
    },
  },
});
export const { increment, decrement, setProducts, AddtoCart } =
  counterSlice.actions;
export default counterSlice.reducer;
