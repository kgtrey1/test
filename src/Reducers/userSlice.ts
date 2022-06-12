import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'Interfaces/IUser';

interface IUserState {
  user?: IUser,
  isLoading: boolean,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
    isLoading: true,
  } as IUserState,
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
