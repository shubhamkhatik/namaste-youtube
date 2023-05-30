import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    video: [],
    loading: false,
  },
  reducers: {
    addVideos: (state, action) => {
      state.video = action.payload;
    },
    removeVideos: (state) => {
      state.video = [];
    },
    loadVideos: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addVideos,removeVideos,loadVideos } = dataSlice.actions;
export default dataSlice.reducer;
