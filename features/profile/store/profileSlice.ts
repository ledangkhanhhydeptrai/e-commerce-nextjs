import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileProps } from "../ProfileProps/ProfileProps";

interface ProfileState {
  loading: boolean;
  error: string | null;
  data: ProfileProps | null;
}
const initialState: ProfileState = {
  data: null,
  error: null,
  loading: false
};
const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess(state, action: PayloadAction<ProfileProps | null>) {
      state.loading = false;
      state.data = action.payload;
    },
    getProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { getProfileRequest, getProfileSuccess, getProfileFailure } =
  ProfileSlice.actions;
export default ProfileSlice.reducer;
