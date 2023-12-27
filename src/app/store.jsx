import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from '../redux/Dragons/dragonSlice';
import missionsReducer from '../redux/missions/missionsSlice';
import profileReducer from '../redux/profile/profileSlice';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
    profile: profileReducer,
  },
});