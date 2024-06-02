import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

export interface IUserState {
  language: "en" | "vi";
}

const initialState: IUserState = {
  language: "vi",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //actions setState bất kì
    setState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Actions
export const userActions = userSlice.actions;

// Selectors
export const userSelectors = (state: RootState) => state.user;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
