import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button';

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const StyledSubmitButton = styled(Button)`
  padding: 0 1.6rem;
  margin-top: 1rem;
  border-radius: 0.3rem;
  background-color: #2b90d9;

  font-size: 1.4rem;
  line-height: 3.6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;

  transition: all 0.2s;

  &:hover {
    filter: brightness(130%);
  }
`;

export const SubmitButton = (): JSX.Element => {
  return (
    <Wrapper>
      <StyledSubmitButton>TOOT!</StyledSubmitButton>
    </Wrapper>
  );
};
