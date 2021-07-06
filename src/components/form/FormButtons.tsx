import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchState } from '../../store/reducers/content-warning.reducer';
import { FormButton, StyledFormButton } from './FormButton';

export const testIds = {
  contentWarningButton: 'content-warning-button',
};

const ContentWarningText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: currentColor;
`;

export const FormButtons = (): JSX.Element => {
  const shown = useAppSelector((state) => state.contentWarning.shown);
  const dispatch = useAppDispatch();

  return (
    <>
      <FormButton icon="paperclip" disabled />
      <FormButton icon="tasks" disabled />
      <FormButton icon="globe" disabled />
      <StyledFormButton
        data-testid={testIds.contentWarningButton}
        active={shown}
        onClick={(event) => {
          event.preventDefault();
          dispatch(switchState());
        }}
      >
        <ContentWarningText>CW</ContentWarningText>
      </StyledFormButton>
    </>
  );
};
