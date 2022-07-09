import React, { ReactNode, useEffect, useLayoutEffect } from "react";

import CommandsList from "./components/CommandsList";

import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../../hooks/useReduxSelector";
import { getAllCommands } from "../../../../redux/slices/command";
import {
  selectAllCommands,
  selectFetchingCommand,
} from "../../../../redux/slices/command/selectores";
import { AppDispatch } from "../../../../redux/types";

export default function CommandDashboard() {
  const dispatch = useDispatch<AppDispatch>();

  const allCommands = useReduxSelector(selectAllCommands);
  const fetchingCommand = useReduxSelector(selectFetchingCommand);

  useLayoutEffect(() => {
    dispatch(getAllCommands());
  }, []);

  return (
    <div>
      <h1>Commands Dashboard</h1>

      <CommandsList commandList={allCommands} />
    </div>
  );
}
