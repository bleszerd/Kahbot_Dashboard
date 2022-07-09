import styled from "styled-components";

export const Container = styled.table`
  width: 100%;

  padding-top: 24px;

  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CommandRowHeader = styled.tr`
  height: 35px;
`;

export const CommandHeader = styled.th`
  border: 1px solid black;
  border-collapse: collapse;

  vertical-align: middle;
`;

export const CommandRow = styled.tr``;

export const CommandRowActive = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;

export const CommandRowAlias = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;

export const CommandRowResponse = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;

export const CommandEditButtonContainer = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;

export const CommandEditButton = styled.button`
  border: none;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.text.primary};
`;
