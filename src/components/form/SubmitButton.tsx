import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../styled-components/buttons';
import { Icon } from './Icon.styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1rem;

  i {
    color: ${(props) => props.theme.colors.classicSecondaryColor};
    font-size: 3rem;

    &:hover {
      transform: translateY(-0.4rem);
    }

    &:active {
      transform: translateY(-0.2rem);
    }
  }
`;

const StyledSubmitButton = styled(PrimaryButton)``;

export const SubmitButton = (): JSX.Element => {
  return (
    <Wrapper>
      <Icon className="fa fa-sign-out" title="Logout" />
      <StyledSubmitButton>TOOT!</StyledSubmitButton>
    </Wrapper>
  );
};
