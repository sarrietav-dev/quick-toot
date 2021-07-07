import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { StyledCharCounter } from './styled/CharCounter.styled';

export const testId = 'char-counter';

export const CharCounter = (): JSX.Element => {
  const { currentCount } = useAppSelector((state) => state.charCounter);

  return (
    <StyledCharCounter negative={currentCount < 0} data-testid={testId}>
      {currentCount}
    </StyledCharCounter>
  );
};
