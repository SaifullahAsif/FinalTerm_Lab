import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMissionsApi } from '../../api/spacex';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetchMissionsApi();
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: { missions: [], status: 'idle', error: null },
  reducers: {
    joinMission: (state, action) => {
      const { missionId } = action.payload;
      const index = state.missions.findIndex((mission) => mission.mission_id === missionId);
      state.missions[index].reserved = true;
    },
    leaveMission: (state, action) => {
      const { missionId } = action.payload;
      const index = state.missions.findIndex((mission) => mission.mission_id === missionId);
      state.missions[index].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;