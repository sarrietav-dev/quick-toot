import React, { useContext } from 'react';
import ContentWarningContext from '../context/content-warning.context';

export const FormButtons = (): JSX.Element => {
  const { shown, toggleWarning } = useContext(ContentWarningContext);

  return (
    <>
      <button className="btn btn--form" disabled>
        <i className="fa fa-fw fa-paperclip"></i>
      </button>
      <button className="btn btn--form" disabled>
        <i className="fa fa-fw fa-tasks"></i>
      </button>
      <button className="btn btn--form" disabled>
        <i className="fa fa-fw fa-globe"></i>
      </button>
      <button
        className={`btn btn--form ${shown ? 'btn--active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          toggleWarning();
        }}
      >
        <span className="content-warning">CW</span>
      </button>
    </>
  );
};
