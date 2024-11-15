import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "@/global";

interface BasketState {
  items: ProductItem[];
}

// Lazy initialize the items to prevent SSR issues
const getInitialState = (): BasketState => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem("ProductItems");
    return {
      items: storedItems ? JSON.parse(storedItems) : [],
    };
  }
  return { items: [] };
};

const basketSlice = createSlice({
  name: "basket",
  initialState: getInitialState(),
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity! += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("ProductItems", JSON.stringify(state.items)); // Persist basket to localStorage
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("ProductItems", JSON.stringify(state.items)); // Persist basket to localStorage
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("ProductItems", JSON.stringify(state.items));
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
