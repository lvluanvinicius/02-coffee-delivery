import styled from "styled-components";

export const ActionAddProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: ${(props) => props.theme["base-button"]};
  height: 33px;
  width: 70px;
  border-radius: 6px;

  button {
    background: none;
    font-size: 1rem;
    flex: 1;
    cursor: pointer;
    height: 100%;
    font-size: 16px;
    color: ${(props) => props.theme.purple};
  }
`;
