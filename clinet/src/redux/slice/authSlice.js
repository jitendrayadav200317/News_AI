import axios from "axios";
import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const SignUp = createAsyncThunk(
  "/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // SignUp
      .addCase(SignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.message);
        toast.success(action.payload.message);
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.error(action.payload?.message || "An error occurred");
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        // Handle successful login (e.g., storing token)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.error(action.payload?.message || "An error occurred");
      });
  },
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
