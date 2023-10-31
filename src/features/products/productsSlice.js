import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductsByCategoryId,
  getProductById,
  getAllCategories,
  getLatestProducts,
  getMostDemandProducts,
  getOffers,
} from "../../service/products/productsAPI";

const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (PageSize) => {
    const response = await getAllProducts(PageSize);
    return response;
  }
);

const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  getAllCategories
);

const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    try {
      const response = await getProductById(productId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const fetchLatestProducts = createAsyncThunk(
  "products/fetchLatest",
  async () => {
    try {
      const response = await getLatestProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const fetchMostDemandProducts = createAsyncThunk(
  "products/fetchMostDemand",
  async () => {
    try {
      const response = await getMostDemandProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const fetchOffers = createAsyncThunk("products/offers", async () => {
  try {
    const response = await getOffers();
    return response;
  } catch (error) {
    throw error;
  }
});

const fetchProductsByCategoryId = createAsyncThunk(
  "products/fetchByCategoryId",
  async ({
    categoryId,
    minPrice,
    maxPrice,
    brandName,
    pageNumber,
    pageSize,
  }) => {
    const response = await getProductsByCategoryId(
      categoryId,
      minPrice,
      maxPrice,
      brandName,
      pageNumber,
      pageSize
    );
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    allCategories: [],
    latestProducts: [],
    mostDemandProducts: [],
    offers: [],
    productsByCategory: [],
    selectedProduct: {
      images: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
        state.productsByCategory = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductsByCategoryId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategoryId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchLatestProducts.fulfilled, (state, action) => {
        state.latestProducts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchLatestProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchMostDemandProducts.fulfilled, (state, action) => {
        state.mostDemandProducts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMostDemandProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostDemandProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------------------------------------------------------------
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export {
  fetchAllProducts,
  fetchProductsByCategoryId,
  fetchProductById,
  fetchAllCategories,
  fetchLatestProducts,
  fetchMostDemandProducts,
  fetchOffers,
};
