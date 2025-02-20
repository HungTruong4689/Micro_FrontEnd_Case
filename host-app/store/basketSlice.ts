import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

// Define Product and BasketItem types
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface BasketItem extends Product {
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
}

// ✅ API URL
const API_URL = "http://localhost:5000/basket";

// ✅ Thunk to fetch basket from the backend
export const fetchBasket = createAsyncThunk("basket/fetchBasket", async () => {
  try {
    const response = await axios.get(API_URL);

    if (!response.data || !response.data.id || typeof response.data.items !== "object") {
      // Reset if basket is missing or incorrectly structured
      await axios.post(API_URL, { id: 1, items: {} });
      console.log("✅ Basket structure reset to default");
      return { id: 1, items: {} };
    }

    return response.data;
  } catch (error) {
    console.error("❌ Error fetching basket:", error);
    return { id: 1, items: {} };
  }
});


const saveBasketToAPI = async (basketState: BasketState) => {
  try {
    const basket = JSON.parse(JSON.stringify(basketState));

    // ✅ Fetch the current basket
    const response = await axios.get(API_URL);
    console.log("Basket from API:", response.data);

    if (!response.data || !response.data.id || typeof response.data.items !== "object") {
      // ✅ If basket does not exist, create/reset it
      await axios.post(API_URL, { id: 1, items: {} });
      console.log("🔄 Reset basket to default!");
    }

    // ✅ Ensure the correct structure is maintained when updating
    await axios.put(API_URL, { id: 1, items: basket.items });
    console.log("✅ Basket updated successfully!");

  } catch (error) {
    console.error("❌ Error updating basket:", error);
  }
};









// ✅ Initial state (empty, but will be loaded from API)
const initialState: BasketState = { items: [] };

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      if (!state.items) state.items = []; // ✅ Ensure correct structure
      const existingItem = state.items.find((item) => item.id === action.payload.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 }); // ✅ Use push() instead of direct assignment
  }

      saveBasketToAPI(state);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveBasketToAPI(state);
    },

    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      if (state.items && state.items[action.payload]) {
        state.items[action.payload].quantity -= 1;
        if (state.items[action.payload].quantity === 0) {
          delete state.items[action.payload];
        }
      }
      saveBasketToAPI(state);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.items = action.payload.items || {};
    });
  },
});


export const { addItem, removeItem, decreaseItemQuantity } = basketSlice.actions;
export const selectBasketItems = (state: RootState) => state.basket.items;
export default basketSlice.reducer;
