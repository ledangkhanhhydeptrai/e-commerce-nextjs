import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileRequest } from "../store/profileSlice";

export const useProfile = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.profile
  );
  React.useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);
  return { data, loading, error };
};
