import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IUser from 'Interfaces/IUser'

const initUser = () => {
  const user: IUser = {
    username: '',
    email: '',
    bio: '',
  };

  return user;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initUser(),
    isLoading: false,
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

export const { updateUser } = userSlice.actions

export default userSlice.reducer
