import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileProps } from "../ProfileProps/ProfileProps";

interface UpdateFormState {
  profile: ProfileProps | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: UpdateFormState = {
  profile: null,
  loading: false,
  error: null,
  success: false
};

const UpdateSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {
    updateProfileRequest(
      state,
      _action: PayloadAction<{ username: string; email: string }>
    ) {
      state.loading = true;
      state.error = null;
    },

    updateProfileSuccess(state, action: PayloadAction<ProfileProps>) {
      state.loading = false;
      state.profile = action.payload;
      state.success = true; // 👈 BẮT BUỘC
    },

    updateProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetUpdateProfileState(state) {
      state.success = false;
      state.error = null;
    }
  }
});

export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  resetUpdateProfileState
} = UpdateSlice.actions;

export default UpdateSlice.reducer;
