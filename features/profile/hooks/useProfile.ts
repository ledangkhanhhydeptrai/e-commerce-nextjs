import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileRequest } from "../store/profileSlice";

import { AppDispatch } from "@/store/store";

export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  const { success } = useSelector((state: RootState) => state.updateProfile);

  // Load profile lần đầu
  React.useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  // Re-fetch profile sau khi update thành công
  React.useEffect(() => {
    if (success) {
      dispatch(getProfileRequest());
    }
  }, [success, dispatch]);

  return { data, loading, error, success };
};
