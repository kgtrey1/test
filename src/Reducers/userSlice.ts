import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEmptyUser, IUser } from 'Interfaces/IUser';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getEmptyUser() as IUser,
    isLoading: true,
  },
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  }
})

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
