import styled from "styled-components";

export const CartActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  align-items: center;

  .price span:nth-child(1) {
    font-weight: 400;
    font-size: 14px;
  }

  .price span:nth-child(2) {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    flex: 1;
    color: ${(props) => props.theme["base-text"]};
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .add-and-remove {
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
  }

  .actions .add-cart {
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};
    width: 35px;
    height: 33px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
