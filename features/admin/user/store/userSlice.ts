import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../services/userServices";

interface UserState {
  users: UserProps[];
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  users: [] as UserProps[],
  loading: false,
  error: null as string | null
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action: PayloadAction<UserProps[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    getUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { getUserRequest, getUserSuccess, getUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
