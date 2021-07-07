import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchState } from '../../store/reducers/content-warning.reducer';
import { FormButton } from './styled/FormButton.styled';
import { ContentWarningText } from './styled/ContentWarningText.styled';
import { Icon } from './styled/Icon.styled';

export const testIds = {
  contentWarningButton: 'content-warning-button',
};

export const FormButtons = (): JSX.Element => {
  const shown = useAppSelector((state) => state.contentWarning.shown);
  const dispatch = useAppDispatch();

  return (
    <>
      <FormButton disabled>
        <Icon className="fa fa-paperclip" />
      </FormButton>
      <FormButton disabled>
        <Icon className="fa fa-tasks" />
      </FormButton>
      <FormButton disabled>
        <Icon className="fa fa-globe" />
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
