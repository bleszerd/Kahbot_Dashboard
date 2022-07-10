import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import kahbotApi from "../../../shared/connection/api/kahbotApi";

import * as T from "./types";

const initialState = {
  fetchingCommand: false,
  lastQueriedCommand: null,
  allCommands: [],
} as T.ICommandSliceInitialState;

const commandApi = kahbotApi.command;

const DEFAULT_ERROR_MESSAGE = "Sorry, an unexpected error occurred.";

export const getAllCommands = createAsyncThunk(
  "@Command/getAllCommands",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await commandApi.getAllCommands();

      return data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE
      );
    }
  }
);

export const getCommand = createAsyncThunk(
  "@Command/getCommand",
  async (callData: T.IGetCommandParams, { rejectWithValue, dispatch }) => {
    try {
      const hasId = callData.id;

      const key = hasId ? "id" : "alias";
      const value = hasId ? hasId : callData.alias;

      const { data } = await commandApi.getCommand({ key, value: value! });

      return data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE
      );
    }
  }
);

export const updateCommand = createAsyncThunk(
  "@Command/updateCommand",
  async (callData: T.IUpdateCommand, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await commandApi.updateCommand(callData);

      return data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE
      );
    }
  }
);

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

    builder
      .addCase(getCommand.pending, (draft) => {
        draft.fetchingCommand = true;
      })
      .addCase(getCommand.fulfilled, (draft, action) => {
        draft.fetchingCommand = false;
        draft.lastQueriedCommand = action.payload.response;
      })
      .addCase(getCommand.rejected, (draft, action) => {
        draft.fetchingCommand = false;
      });

    builder
      .addCase(updateCommand.pending, (draft) => {
        draft.fetchingCommand = true;
      })
      .addCase(updateCommand.fulfilled, (draft, action) => {
        draft.fetchingCommand = false;
      })
      .addCase(updateCommand.rejected, (draft, action) => {
        draft.fetchingCommand = false;
      });
  },
});

export default commandSlice.reducer;
