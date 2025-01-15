import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartOpen: false,
};

const checkCount = (count, operand) => {
  if (count + operand > 0) return 1;
  else return 0;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload) return;

      // action.payload:
      // id: "00001",
      // imgSrc: "./images/bestsellers/bestseller-1.png",
      // type: "Chair",
      // productName: "Classic chair",
      // price: 392.0,
      // stars: 5,
      // count: 1,

      let addProduct = 1; // -1 - delete product; 0 - change count; 1 - add product with count

      state.products.map((p) => {
        if (p.id === action.payload.id) {
          if (checkCount(p.count, action.payload.count) > 0) {
            addProduct = 0;
            p.count = p.count + action.payload.count;
          } else {
            addProduct = -1;
          }
        }
      });

      if (addProduct === 1)
        state.products = [...state.products, action.payload];
      if (addProduct === -1)
        state.products.filter((p) => p.id !== action.payload.id);
    },
    setCount: (state, action) => {
      if (!action.payload?.id) return;
      if (action.payload.count <= 0) return;

      state.products.map((p) =>
        p.id === action.payload.id ? (p.count = action.payload.count) : p.count
      );
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state = { ...initialState, cartOpen: state.cartOpen };
    },
    openCart: (state, action) => {
      state.cartOpen = action.payload;
    },
  },
});

export const { addToCart, setCount, removeFromCart, clearCart, openCart } =
  cartSlice.actions;

export default cartSlice.reducer;
