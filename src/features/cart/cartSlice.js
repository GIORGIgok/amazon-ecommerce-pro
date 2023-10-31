import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseAPI } from "../../service/baseAPI";

const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId, { getState }) => {
    const { jwtToken } = getState().user;

    try {
      const response = await baseAPI.post(
        "/api/cart/addincart",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { getState }) => {
    const { jwtToken } = getState().user;

    try {
      const response = await baseAPI.delete("/api/cart/removefromcart", {
        data: { productId },
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      return { productId, removed: response.data };
    } catch (error) {
      throw error;
    }
  }
);

const isProductInCart = createAsyncThunk(
  "cart/isProductInCart",
  async (productId, { getState }) => {
    const { jwtToken } = getState().user;

    try {
      const response = await baseAPI.get(
        `/api/cart/isproductincart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const getMyCartProducts = createAsyncThunk(
  "cart/getMyCartProducts",
  async (_, { getState }) => {
    const { jwtToken } = getState().user;
    try {
      const response = await baseAPI.get("/api/cart/getmycartproducts", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  productsInCart: [],
  isProductInCart: false,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state, _action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsInCart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isProductInCart = false;
      })
      // -------------------------------------------------
      .addCase(removeFromCart.pending, (state, _action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.removed) {
          state.productsInCart = state.productsInCart.filter(
            (item) => item.id !== action.payload.productId
          );
        }
        state.isProductInCart = state.productsInCart.length > 0;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // -------------------------------------------------
      .addCase(isProductInCart.pending, (state, _action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(isProductInCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isProductInCart = action.payload;
      })
      .addCase(isProductInCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // -------------------------------------------------
      .addCase(getMyCartProducts.pending, (state, _action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsInCart = action.payload;
        state.isProductInCart = action.payload.length > 0;
      })
      .addCase(getMyCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { addToCart, removeFromCart, isProductInCart, getMyCartProducts };

export default cartSlice.reducer;
