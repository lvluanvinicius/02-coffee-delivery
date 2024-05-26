import styled from "styled-components";

export const TagCoffeeTypeContainer = styled.div`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.8rem;
  padding: 5px 9px;
  border-radius: 100px;
  font-weight: 700;
`;
