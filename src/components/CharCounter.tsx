import React from 'react';
import { useAppSelector } from '../store/hooks';

export const testId = 'char-counter';

export const CharCounter = (): JSX.Element => {
  const { currentCount } = useAppSelector((state) => state.charCounter);

  const getClassName = () =>
    `character-counter ${
      currentCount < 0 ? 'character-counter--negative' : ''
    }`;

  return (
    <div className={getClassName()} data-testid={testId}>
      <span>{currentCount}</span>
    </div>
  );
};
