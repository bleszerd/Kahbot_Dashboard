import styled, { css } from "styled-components";
import { IButtonSideProps } from "./types";

export const Container = styled.div`
  width: 45px;
  height: 40px;

  padding: 6px 6px 6px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const ButtonSide = styled.div<IButtonSideProps>`
  background: ${({ active }) => (active ? "white" : "transparent")};

  width: 5px;

  height: 100%;

  margin-right: 6px;

  border-radius: 8px;

  transition: all 0.2s ease-in-out;
`;

export const Button = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  background: white;

  border-radius: 8px;
`;
