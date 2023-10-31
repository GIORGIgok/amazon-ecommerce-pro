import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../service/user/userAPI";
import jwtDecode from "jwt-decode";

// register a user
const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
  const response = await authService.registerUser(userData);
  return response;
});

// log-in a user
const loginUser = createAsyncThunk("user/loginUser", async (loginData) => {
  const response = await authService.loginUser(loginData);
  return response;
});

// update a user info
const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (updatesObj) => {
    try {
      const response = await authService.updateUserData(updatesObj);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

// action to sign out the user
const signOut = createAsyncThunk("user/signOut", async () => {
  localStorage.removeItem("jwtToken");
  return null;
});

const storedToken = localStorage.getItem("jwtToken");
let initialUserState = {
  username: "",
  email: "",
  role: "",
  nameid: null,
  exp: null,
};

if (storedToken) {
  const decodedToken = jwtDecode(storedToken);
  initialUserState = {
    username: decodedToken.unique_name,
    email: decodedToken.email,
    role: decodedToken.role,
    nameid: decodedToken.nameid,
    exp: decodedToken.exp,
  };
}

const initialState = {
  user: initialUserState,
  isLoggedIn: !!storedToken,
  jwtToken: storedToken,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.jwtToken = action.payload;
        localStorage.setItem("jwtToken", action.payload);

        const decodedToken = jwtDecode(action.payload);
        console.log("decoded Token:", decodedToken);
        state.user = {
          username: decodedToken.unique_name,
          email: decodedToken.email,
          role: decodedToken.role,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
// ------------------------------------------------------------
      .addCase(signOut.fulfilled, (state, _action) => {
        state.isLoggedIn = false;
        state.jwtToken = null;
      })
// ------------------------------------------------------------
      .addCase(registerUser.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(registerUser.rejected, (state, _action) => {
        state.loading = false;
        state.error = true;
      })
// ------------------------------------------------------------
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.jwtToken = action.payload.jwt;
          localStorage.setItem("jwtToken", action.payload.jwt);
          const decodedNewToken = jwtDecode(action.payload.jwt);
          state.user = {
            username: decodedNewToken.unique_name,
            email: decodedNewToken.email,
            role: decodedNewToken.role,
            nameid: decodedNewToken.nameid,
            exp: decodedNewToken.exp,
          }
        }
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserData.rejected, (state, _action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
export { registerUser, loginUser, signOut, updateUserData };
