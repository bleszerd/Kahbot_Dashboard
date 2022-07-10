import React from "react";
import { ICommandListProps } from "./types";

import * as S from "./styles";

export default function CommandsList({
  commandList,
  actions,
}: ICommandListProps) {
  return (
    <S.Container>
      <S.CommandRowHeader>
        <S.CommandHeader>Active</S.CommandHeader>
        <S.CommandHeader>Alias</S.CommandHeader>
        <S.CommandHeader>Command</S.CommandHeader>
        <S.CommandHeader>Edit</S.CommandHeader>
      </S.CommandRowHeader>
      {commandList.map((command) => (
        <S.CommandRow>
          <S.CommandRowActive>
            <input type="checkbox" checked={command.active} />
          </S.CommandRowActive>
          <S.CommandRowAlias>{command.alias}</S.CommandRowAlias>
          <S.CommandRowResponse>{command.response}</S.CommandRowResponse>

          <S.CommandEditButtonContainer>
            <S.CommandEditButton
              onClick={() => actions?.onEditPress(command._id)}
            >
              X
            </S.CommandEditButton>
          </S.CommandEditButtonContainer>
        </S.CommandRow>
      ))}
    </S.Container>
  );
}
