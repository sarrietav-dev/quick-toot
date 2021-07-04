import React, { useContext } from 'react';
import ContentWarningContext from '../context/content-warning.context';
import { FormButton } from './FormButton';

export const FormButtons = (): JSX.Element => {
  const { shown, toggleWarning } = useContext(ContentWarningContext);

  return (
    <>
      <FormButton icon="paperclip" disabled />
      <FormButton icon="tasks" disabled />
      <FormButton icon="globe" disabled />
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
