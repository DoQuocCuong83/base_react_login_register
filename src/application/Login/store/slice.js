import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./async-thunk";
import Cookies from "js-cookie";
import reducerRegistry from "../../../store/reducer-registry";

const initialState = {
  statusLogin: "",
  statusRegister: ""
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.status === "Success") {
        Cookies.set("token_auth", action.payload.data.user.Token, {
          expires: 50
        });
      }
      state.statusLogin = action.payload.status;
    });
    builder.addCase(login.rejected, () => {
      alert("Có lỗi");
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.statusRegister = action.payload.status;
    });
    builder.addCase(register.rejected, () => {
      alert("Có lỗi");
    });
  }
});

reducerRegistry.register("login", loginSlice.reducer);

export const selectStatusLogin = state => state.login.statusLogin;
export const selectStatusRegister = state => state.login.statusRegister;
