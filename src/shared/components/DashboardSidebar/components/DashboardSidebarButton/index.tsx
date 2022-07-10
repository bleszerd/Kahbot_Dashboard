import React from "react";
import { IDashboardSidebarButtonProps } from "./types";

import * as S from "./styles";

export default function DashboardSidebarButton({
  children,
  active,
  onClick,
}: IDashboardSidebarButtonProps) {
  return (
    <S.Container>
      <S.ButtonSide active={active} />
      <S.Button onClick={() => onClick()}>{children}</S.Button>
    </S.Container>
  );
}
