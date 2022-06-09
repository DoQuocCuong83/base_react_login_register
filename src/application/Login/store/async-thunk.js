import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest } from "../../../api/requests";

export const login = createAsyncThunk(
  "login/LOGIN",
  async (data, { rejectWithValue }) => {
    const response = await postRequest(data.endpoint, data.account);
    if (response) return response;
    return rejectWithValue();
  }
);

export const register = createAsyncThunk(
  "login/REGISTER",
  async (data, { rejectWithValue }) => {
    const response = await postRequest(data.endpoint, data.account);
    if (response) return response;
    return rejectWithValue();
  }
);
