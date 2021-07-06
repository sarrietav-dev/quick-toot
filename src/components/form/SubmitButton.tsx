import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../styled-components/buttons';

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const StyledSubmitButton = styled(PrimaryButton)`
  margin-top: 1rem;
`;

export const SubmitButton = (): JSX.Element => {
  return (
    <Wrapper>
      <StyledSubmitButton>TOOT!</StyledSubmitButton>
    </Wrapper>
  );
};
