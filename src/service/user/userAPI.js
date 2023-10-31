import { baseAPI } from "../baseAPI";

export const loginUser = async (loginData) => {
  try {
    const response = await baseAPI.post(`/api/user/login`, loginData);
    return response.data.jwt;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await baseAPI.post(`/api/user/registerUser`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

export const updateUserData = async (updatesObj) => {
  const token = localStorage.getItem("jwtToken");
  const response = await baseAPI.put(`/api/User/updateuserdata/`, updatesObj, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "response");
  return response.data;
};
