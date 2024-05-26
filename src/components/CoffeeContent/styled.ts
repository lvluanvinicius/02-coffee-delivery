import styled from "styled-components";
import { Container } from "../../styles/components/Container";

export const CoffeeContentContainer = styled(Container)``;

export const CoffeeContentArea = styled.main`
  width: 80%;

  h1 {
    font-family: "Baloo 2";
  }
`;

export const CoffeeListContent = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;

  display: grid;
  gap: 3rem;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, calc(100% / 5));

  @media (max-width: 768.99px) {
    grid-template-columns: repeat(auto-fill, calc(100% / 1));
    justify-content: center;
  }
`;
