import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchState } from '../../store/reducers/content-warning.reducer';
import { FormButton } from './FormButton';

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
      <FormButton disabled>
        <i className="fa fa-paperclip" />
      </FormButton>
      <FormButton disabled>
        <i className="fa fa-tasks" />
      </FormButton>
      <FormButton disabled>
        <i className="fa fa-globe" />
      </FormButton>
      <FormButton
        data-testid={testIds.contentWarningButton}
        active={shown}
        onClick={(event) => {
          event.preventDefault();
          dispatch(switchState());
        }}
      >
        <ContentWarningText>CW</ContentWarningText>
      </FormButton>
    </>
  );
};
