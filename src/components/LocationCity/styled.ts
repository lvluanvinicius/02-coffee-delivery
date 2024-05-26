import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const LocationCityTrigger = styled(Dialog.DialogTrigger)`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const LocationCityContainer = styled(Dialog.Root)``;

export const LocationCityOverlay = styled(Dialog.Overlay)`
  background: ${(props) => props.theme["overlay"]};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const LocationCityContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  background: ${(props) => props.theme["base-card"]};
  width: 400px;

  padding: 1rem;
  border-radius: 8px;
`;

export const LocationCityTitle = styled(Dialog.Title)`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props) => props.theme["base-label"]};
`;

export const LocationCityForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LocationCityInput = styled.input`
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  padding: 8px 1rem;
  border-radius: 6px;
  font-size: 1rem;
  color: ${(props) => props.theme["base-label"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }
`;

export const LocationCityConfirm = styled.button`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  padding: 8px 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const LocationCityMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  text-align: center;
`;
