import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDragonsApi } from '../../api/spacex';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await fetchDragonsApi();
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: { dragons: [], status: 'idle', error: null },
  reducers: {
    reserveDragon: (state, action) => {
      const { dragonId } = action.payload;
      const index = state.dragons.findIndex((dragon) => dragon.id === dragonId);
      state.dragons[index].reserved = true;
    },
    cancelDragonReservation: (state, action) => {
      const { dragonId } = action.payload;
      const index = state.dragons.findIndex((dragon) => dragon.id === dragonId);
      state.dragons[index].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;