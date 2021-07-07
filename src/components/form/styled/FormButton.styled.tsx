import styled from 'styled-components';
import { Button } from '../../styled-components/buttons';

export const FormButton = styled(Button)`
  margin: 0.3rem;
  background-color: inherit;
  border-radius: 0.5rem;
  transition: all 0.2s;
  width: 3rem;
  padding: 0.5rem;
  color: #51596f;

  &:disabled {
    color: #a6aec2;
    cursor: initial;
  }

  &:not(:disabled):hover {
    background-color: #d6d8dc;
  }

  &:not(:disabled):active {
    background-color: #cfd1d6;
  }
`;
