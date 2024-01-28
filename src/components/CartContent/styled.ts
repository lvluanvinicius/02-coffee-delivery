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
      font-family: "Baloo 2";
      font-size: 1.2rem;
    }
  }

  .cart-resume {
    width: 450px;

    h1 {
      font-family: "Baloo 2";
      font-size: 1.2rem;
    }
  }
`;

export const CartPaymentDataContainer = styled.div`
  .address {
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2rem;
  }

  .method-pay {
    margin-top: 1rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2rem;
  }
`;

export const CartPaymentDataContent = styled.div`
  .address-title {
    display: flex;
    gap: 1rem;
    align-items: start;
  }

  .address-title span svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .address-title .address-description,
  .method-pay .method-pay-description {
    h2 {
      font-size: 1.1rem;
      font-style: normal;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  .form-address {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-address .form-group {
    width: 100%;

    input {
      border: 1px solid ${(props) => props.theme["base-button"]};
      background: ${(props) => props.theme["base-input"]};
      padding: 14px;
      border-radius: 6px;
      font-size: 1rem;
      color: ${(props) => props.theme["base-label"]};

      &::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }

      &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
      }
    }

    &.cep input {
      width: 250px;
    }

    &.public-place input {
      width: 100%;
    }

    &.number-complement {
      display: flex;
      gap: 1rem;
    }

    &.number-complement input.number {
      width: 250px;
    }

    &.number-complement input.complement {
      flex: 1;
    }

    &.location {
      display: flex;
      gap: 1rem;
      .district {
        width: 250px;
      }
      .city {
        flex: 1;
      }
      .state {
        width: 100px;
      }
    }
  }

  .method-pay .title {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  .method-pay .title span svg {
    color: ${(props) => props.theme.purple};
  }

  .method-pay .content-form {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .method-pay .content-form .card-selector {
    background-color: ${(props) => props.theme["base-button"]};
    width: 250px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 1.5rem;
    height: 65px;
    border-radius: 6px;
    gap: 1rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      font-style: normal;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
  }
`;
