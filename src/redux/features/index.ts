import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type User = {
  user: {
    username: string;
  } | null;
};

const initialState: User = {
  user: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<User>) => {
      return {
        user: payload.user,
      };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
