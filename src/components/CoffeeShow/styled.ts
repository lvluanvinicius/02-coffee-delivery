import styled, { css } from "styled-components";
import { Container } from "../../styles/components/Container";

export const CoffeeShowContainer = styled(Container)<{ bg: string }>`
  background-image: url(${(props) => props.bg});
`;

export const CoffeeShowContent = styled.div`
  width: 80%;
  height: 34rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;

  .title {
    h1 {
      font-family: "Baloo 2";
    }

    p {
      font-size: 1.25rem;
    }
  }

  .actions {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, calc(570px / 2));

    gap: 1rem;
    margin: 1rem 0;
  }
`;

interface CardIconProps {
  variant: string;
}

export const CartIcon = styled.div<CardIconProps>`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;

  span:nth-child(1) {
    border-radius: 100%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};

    ${(props) => {
      if (props.variant === "cart") {
        return css`
          background: ${props.theme["yellow-dark"]};
        `;
      }

      if (props.variant === "package") {
        return css`
          background: ${props.theme["base-text"]};
        `;
      }

      if (props.variant === "time") {
        return css`
          background: ${props.theme.yellow};
        `;
      }

      if (props.variant === "coffe") {
        return css`
          background: ${props.theme.purple};
        `;
      }
    }};
  }
`;
