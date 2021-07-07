import React from 'react';
import { PrimaryButton } from '../styled-components/buttons';
import { Icon } from './styled/Icon.styled';
import { SubmitButtonWrapper } from './styled/SubmitButton.styled';

export const SubmitButton = (): JSX.Element => {
  return (
    <SubmitButtonWrapper>
      <Icon className="fa fa-sign-out" title="Logout" />
      <PrimaryButton>TOOT!</PrimaryButton>
    </SubmitButtonWrapper>
  );
};
