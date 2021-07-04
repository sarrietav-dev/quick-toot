import React from 'react';

export const testId = 'char-counter';

export const CharCounter = (): JSX.Element => {
  return (
    <div className="character-counter" data-testid={testId}>
      <span>500</span>
    </div>
  );
};
