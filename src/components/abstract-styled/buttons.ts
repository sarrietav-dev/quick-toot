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

export const PrimaryButton = styled(Button)`
  padding: 0 1.6rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.colors.primary};

  font-size: 1.4rem;
  line-height: 3.6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;

  transition: all 0.2s;

  &:hover {
    filter: brightness(130%);
  }

  &:active {
    filter: brightness(110%);
  }
`;
