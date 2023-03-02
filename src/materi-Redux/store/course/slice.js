import { createSlice } from "@reduxjs/toolkit";
import * as courseAct from "./action";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      createdAt: "",
      title: "",
      image: "",
      description: "",
      price: "",
      id: "",
    },
    error: null,
  },
  reducers: {
    // untuk mengubah state
  },
  extraReducers: (builder) =>
    builder
      .addCase(courseAct.getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(courseAct.getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(courseAct.getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(courseAct.getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(courseAct.getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(courseAct.getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default courseSlice.reducer;
