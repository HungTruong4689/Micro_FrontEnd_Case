import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

// Define Product and BasketItem types
interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  category?:string;
  description?:string;
  rating?:{
    rate:number;
    count:number;
  }
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

    if (!response.data || !response.data.id || !Array.isArray(response.data.items)) {
      // Reset if basket is missing or incorrectly structured
      await axios.post(API_URL, { id: 1, items: [] });
      console.log("✅ Basket structure reset to default");
      return { id: 1, items: [] };
    }

    return response.data;
  } catch (error) {
    console.error("❌ Error fetching basket:", error);
    return { id: 1, items: [] };
  }
});


const saveBasketToAPI = async (basketState: BasketState) => {
  try {
    const basket = JSON.parse(JSON.stringify(basketState));

    // ✅ Fetch the current basket
    const response = await axios.get(API_URL);
    console.log("Basket from API:", response.data);

    if (!response.data || !response.data.id || !Array.isArray(response.data.items)) {
      // ✅ If basket does not exist, create/reset it
      await axios.post(API_URL, { id: 1, items: [] });
      console.log("🔄 Reset basket to default!");
    }

    
    await axios.put(API_URL, { id: 1, items: basket.items });
    // await axios.patch(`${API_URL}/1`, { items: basket.items });
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
      console.log("➖ Decreasing quantity of item:", action.payload);

      // ✅ Find the item in the array
      const existingItem = state.items.find((item) => item.id === action.payload);
      
      if (existingItem) {
        existingItem.quantity -= 1;

        // ✅ If quantity is 0, remove the item
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }

      saveBasketToAPI(state); // ✅ Save the updated basket
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      console.log("➕ Increasing quantity of item:", action.payload);

      // ✅ Find the item in the array
      const existingItem = state.items.find((item) => item.id === action.payload);
      
      if (existingItem) {
        existingItem.quantity += 1;
      }

      saveBasketToAPI(state); // ✅ Save the updated basket
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload.items) ? action.payload.items : [];
    });
  },
});

export const { addItem, removeItem, decreaseItemQuantity, increaseItemQuantity } = basketSlice.actions;
export const selectBasketItems = (state: RootState) => state.basket.items;
export default basketSlice.reducer;
