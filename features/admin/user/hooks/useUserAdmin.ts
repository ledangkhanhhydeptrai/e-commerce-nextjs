import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../store/userSlice";

export const useUserAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.userAdmin
  );
  React.useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);
  return {
    users,
    loading,
    error
  };
};
