import React from 'react';

import { useAppSelector } from '../../store/hooks';
import {
  ContentWarningBoxWrapper,
  Input,
} from './styled/ContentWarningBox.styled';

export const testIds = {
  contentWarningBoxWrapper: 'content-warning-box-wrapper',
  contentWarningBox: 'content-warning-box',
};

export const ContentWarningBox = (): JSX.Element => {
  const shown = useAppSelector((state) => state.contentWarning.shown);

  return (
    <ContentWarningBoxWrapper
      visible={shown}
      data-testid={testIds.contentWarningBoxWrapper}
    >
      <Input
        data-testid={testIds.contentWarningBox}
        type="text"
        placeholder="Write your warning here"
      />
    </ContentWarningBoxWrapper>
  );
};
