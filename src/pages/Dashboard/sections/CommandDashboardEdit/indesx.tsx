import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useReduxSelector } from "../../../../hooks/useReduxSelector";
import { getCommand, updateCommand } from "../../../../redux/slices/command";
import {
  selectFetchingCommand,
  selectLastQueriedCommand,
} from "../../../../redux/slices/command/selectores";
import { AppDispatch } from "../../../../redux/types";
import {
  IReplace,
  IUpdateCommandBody,
} from "../../../../shared/connection/api/kahbotApi/command/types";
import CommandReplaceList from "./components/CommandReplacesList";
import { ICommandDashboardEditParams } from "./types";

export default function CommandDashboardEdit() {
  const { commandId: paramnCommandId } =
    useParams<ICommandDashboardEditParams>();

  const dispatch = useDispatch<AppDispatch>();

  const command = useReduxSelector(selectLastQueriedCommand);
  const fetchingCommand = useReduxSelector(selectFetchingCommand);

  const [commandId, setCommandId] = useState<string>();
  const [commandActive, setCommandActive] = useState<boolean>();
  const [commandAlias, setCommandAlias] = useState<string>();
  const [commandResponse, setCommandResponse] = useState<string>();
  const [commandReplaces, setCommandReplaces] = useState<IReplace[]>([]);

  useLayoutEffect(() => {
    dispatch(getCommand({ id: paramnCommandId }));
  }, []);

  useEffect(() => {
    if (command) {
      const { _id, active, alias, replaces, response } = command;

      setCommandId(_id);
      setCommandActive(active);
      setCommandAlias(alias);
      setCommandResponse(response);
      setCommandReplaces(replaces);
    }
  }, [command]);

  const onCommandUpdate = () => {
    if (!command) return;

    const updateCommandReqBody: IUpdateCommandBody = {
      id: paramnCommandId,
      newCommand: {
        active: commandActive!,
        alias: commandAlias!,
        response: commandResponse!,
        replaces: commandReplaces,
      },
    };

    dispatch(updateCommand(updateCommandReqBody));
  };

  const onReplacesChange = (replaces: IReplace[]) => {
    setCommandReplaces([...replaces]);
  };

  return (
    <div>
      <div>
        <label>Command Active</label>
        <input
          type={"checkbox"}
          checked={commandActive}
          onChange={() => setCommandActive((old) => !old)}
        />
      </div>

      <div>
        <label>Command Id</label>
        <input
          value={commandId}
          onChange={(e) => setCommandId(e.target.value)}
        />
      </div>

      <div>
        <label>Alias</label>
        <input
          value={commandAlias}
          onChange={(e) => setCommandAlias(e.target.value)}
        />
      </div>

      <div>
        <label>Response</label>
        <input
          value={commandResponse}
          onChange={(e) => setCommandResponse(e.target.value)}
        />
      </div>

      <CommandReplaceList
        replaces={commandReplaces}
        actions={{
          onChange: onReplacesChange,
        }}
      />

      <button onClick={onCommandUpdate}>Update Command</button>
    </div>
  );
}
