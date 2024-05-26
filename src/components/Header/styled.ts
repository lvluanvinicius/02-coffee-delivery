import styled from "styled-components";
import { Container } from "../../styles/components/Container";
import { Link } from "react-router-dom";

export const HeaderContainer = styled(Container)``;

export const HeaderContent = styled.div`
  width: 80%;
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Cart = styled(Link)`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 8px;
  padding: 0.5rem 0.7rem;
  position: relative;
  cursor: pointer;
`;

export const CountProducts = styled.div`
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: bold;

  position: absolute;
  top: -8px;
  right: -8px;

  height: 1.25rem;
  width: 1.25rem;
  border-radius: 100%;
  text-align: center;
`;
