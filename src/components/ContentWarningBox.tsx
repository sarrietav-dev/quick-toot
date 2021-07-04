import React from 'react';

export const testId = 'content-warning-box';

export const ContentWarningBox = () => {
  return (
    <input
      data-testid={testId}
      type="text"
      name="cw"
      id=""
      className="content-warning-box"
      placeholder="Write your warning here"
    />
  );
};
