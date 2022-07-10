import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;

  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
