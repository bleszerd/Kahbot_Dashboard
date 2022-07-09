import React from "react";
import { Link } from "react-router-dom";

import * as PS from "../../global/styles/styled";
import * as S from "./styles";

export default function HomePage() {
  return (
    <PS.FullScreenContainer>
      <S.Container>
        <p>Hello! Go to&nbsp;</p>
        <Link to={"/dashboard"}>Dashboard</Link>
        <p>.</p>
      </S.Container>
    </PS.FullScreenContainer>
  );
}
