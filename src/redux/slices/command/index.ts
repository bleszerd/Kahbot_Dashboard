import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import kahbotApi from "../../../shared/connection/api/kahbotApi";

import * as T from "./types";

const initialState = {
  fetchingCommand: false,
  allCommands: [],
} as T.ICommandSliceInitialState;

const commandApi = kahbotApi.command;

export const commandSlice = createSlice({
  name: "@Command",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCommands.pending, (draft) => {
        draft.fetchingCommand = true;
      })
      .addCase(getAllCommands.fulfilled, (draft, action) => {
        draft.fetchingCommand = false;
        draft.allCommands = action.payload.response;
      })
      .addCase(getAllCommands.rejected, (draft, action) => {
        draft.fetchingCommand = false;
      });
  },
});

export const getAllCommands = createAsyncThunk(
  "@Command/getAllCommands",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await commandApi.getAllCommands();

      return data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? "An error has ocurred"
      );
    }
  }
);

// export const {
//   reducers here
// } = commandSlice.actions;

export default commandSlice.reducer;
