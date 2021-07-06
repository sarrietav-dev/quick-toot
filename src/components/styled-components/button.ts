import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.2s;
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.active ? '#2b90d9' : '')};
`;
