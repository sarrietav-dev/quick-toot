import styled from 'styled-components';

interface WrapperProps {
  visible: boolean;
}

export const ContentWarningBoxWrapper = styled.div`
  height: ${(props: WrapperProps) => (props.visible ? '100%' : 0)};
  opacity: ${(props: WrapperProps) => (props.visible ? 1 : 0)};
  z-index: ${(props: WrapperProps) => (props.visible ? 1 : 0)};
  margin-bottom: ${(props: WrapperProps) => (props.visible ? '1rem' : 0)};
  pointer-events: ${(props: WrapperProps) =>
    props.visible ? 'initial' : 'none'};

  transition: all 0.2s;
  transform-origin: bottom;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  outline: none;

  &::placeholder {
    color: #606984;
  }

  border-radius: 0.3rem;
  padding: 1rem;
  padding: 1.5rem;
`;
