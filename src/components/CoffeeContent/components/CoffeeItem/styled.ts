import styled from "styled-components";

export const CoffeItemContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  width: 260px;
  height: 300px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  .content {
    width: 80%;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0.8rem;
  }

  .title {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-family: "Baloo 2";
  }

  .description {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (max-width: 768.99px) {
    width: 350px;
    height: 310px;
  }
`;
