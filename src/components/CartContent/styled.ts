import styled from "styled-components";
import { Container } from "../../styles/components/Container";

export const CartContentContainer = styled(Container)``;

export const CartContentArea = styled.form`
  width: 80%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .payment-data {
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
      margin-bottom: 1rem;
      font-family: "Baloo 2";
      font-size: 1.3rem;
    }
  }

  .cart-resume {
    width: 500px;

    h1 {
      margin-bottom: 1rem;
      font-family: "Baloo 2";
      font-size: 1.3rem;
    }
  }
`;

export const CartResumeContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2rem;

  .divider {
    width: 100%;
    padding: 1rem 0;

    hr {
      border-color: ${(props) => props.theme["base-button"]};
      opacity: 0.3;
    }
  }

  .price-resume {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;

    .total-items,
    .freight {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1rem;
      font-weight: 500;
    }

    .total-items,
    .freight,
    .total {
      display: flex;
      justify-content: space-between;
    }

    .total {
      font-weight: 800;
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const ProductCartListContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;

  .content {
    width: 100%;
  }

  .title {
    display: flex;
    flex: 1;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
    font-size: 0.9rem;

    span:nth-child(2) {
      font-family: "Baloo 2";
      font-size: 1.1rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }
  }

  img {
    margin: 0;
    width: 60px !important;
    height: 60px !important;
  }

  .action {
    display: flex;
    gap: 1rem;
  }
`;

export const RemoveFromCartContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  font-size: 0.8rem;
  padding: 0 0.7rem;
  gap: 4px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  cursor: pointer;
`;

export const ConfirmCheckout = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    cursor: pointer;
  }
`;
