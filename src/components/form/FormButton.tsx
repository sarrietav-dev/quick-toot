import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button';

interface FormButtonProps {
  icon: 'globe' | 'paperclip' | 'tasks';
  disabled: boolean;
}

export const StyledFormButton = styled(Button)`
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

  & > * {
    font-size: 2rem;
    line-height: 2rem;
  }

  &:not(:disabled):hover {
    background-color: #d6d8dc;
  }

  &:not(:disabled):active {
    background-color: #cfd1d6;
  }
`;

export const FormButton = ({
  icon,
  disabled,
}: FormButtonProps): JSX.Element => {
  return (
    <StyledFormButton disabled={disabled}>
      <i className={`fa fa-fw fa-${icon}`}></i>
    </StyledFormButton>
  );
};
