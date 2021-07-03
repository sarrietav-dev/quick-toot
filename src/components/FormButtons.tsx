import React from 'react';

export const FormButtons = (): JSX.Element => {
  return (
    <>
      <button className="btn btn--form">
        <i className="fa fa-fw fa-paperclip"></i>
      </button>
      <button className="btn btn--form">
        <i className="fa fa-fw fa-tasks"></i>
      </button>
      <button className="btn btn--form">
        <i className="fa fa-fw fa-globe"></i>
      </button>
      <button className="btn btn--form">
        <span className="content-warning">CW</span>
      </button>
    </>
  );
};
