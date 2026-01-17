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
    },

    updateProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure
} = UpdateSlice.actions;

export default UpdateSlice.reducer;
