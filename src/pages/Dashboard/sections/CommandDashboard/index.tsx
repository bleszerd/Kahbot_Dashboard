import React, { ReactNode, useEffect, useLayoutEffect } from "react";

import CommandsList from "./components/CommandsList";

import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../../hooks/useReduxSelector";
import { getAllCommands, getCommand } from "../../../../redux/slices/command";
import {
  selectAllCommands,
  selectFetchingCommand,
} from "../../../../redux/slices/command/selectores";
import { AppDispatch } from "../../../../redux/types";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

export default function CommandDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const allCommands = useReduxSelector(selectAllCommands);
  const fetchingCommand = useReduxSelector(selectFetchingCommand);

  useLayoutEffect(() => {
    dispatch(getAllCommands());
  }, []);

  const onEditPress = (commandId: string | undefined) => {
    if (!commandId) return;

    navigate(`/dashboard/commands/${commandId}`);
  };

  return (
    <S.Container>
      <h1>Commands Dashboard</h1>

      <CommandsList commandList={allCommands} actions={{ onEditPress }} />
    </S.Container>
  );
}
