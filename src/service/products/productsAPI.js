import { baseAPI } from '../baseAPI';

export const getAllProducts = async (PageSize) => {
  const params = new URLSearchParams({
    PageSize: PageSize,
  })
  const response = await baseAPI.get(`/api/product/products?${params.toString()}`);
  return response.data;
};

export const getProductsByCategoryId = async (categoryId, minPrice, maxPrice, brandName, pageNumber) => {
  const params = new URLSearchParams({
    CategoryId: categoryId,
    PriceFrom: minPrice,
    PriceTo: maxPrice,
    BrandName: brandName,
    PageNumber: pageNumber,
    PageSize: 5,
  });
  const response = await baseAPI.get(`/api/product/products?${params}`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await baseAPI.get('/api/product/categories');
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await baseAPI.get(`/api/product/products/${productId}`);
  return response.data;
};

export const getLatestProducts = async () => {
  const response = await baseAPI.get('/api/product/latestproducts');
  return response.data;
};

export const getMostDemandProducts = async () => {
  const response = await baseAPI.get('/api/product/mostdemandproducts');
  return response.data;
}

export const getOffers = async () => {
  const response = await baseAPI.get('/api/product/offers');
  return response.data;
}

