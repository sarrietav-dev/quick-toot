import React from 'react';
import '../sass/main.scss';

export const testId = 'test-box';

export const TextBox = (): JSX.Element => {
  return (
    <textarea
      placeholder="What's on your mind?"
      name="textarea"
      className="compose-box"
      data-testid={testId}
    ></textarea>
  );
};
