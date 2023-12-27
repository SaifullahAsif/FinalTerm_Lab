import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: { dragons: [], missions: [] },
  reducers: {
    addToProfile: (state, action) => {
      const { type, item } = action.payload;
      state[type] = [...state[type], item];
    },
    removeFromProfile: (state, action) => {
      const { type, itemId } = action.payload;
      state[type] = state[type].filter((item) => item.id !== itemId);
    },
  },
});

export const { addToProfile, removeFromProfile } = profileSlice.actions;
export default profileSlice.reducer;