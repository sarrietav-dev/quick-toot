import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { switchState } from '../store/reducers/content-warning.reducer';
import { FormButton } from './FormButton';

export const FormButtons = (): JSX.Element => {
  const shown = useAppSelector((state) => state.contentWarning.shown);
  const dispatch = useAppDispatch();

  return (
    <>
      <FormButton icon="paperclip" disabled />
      <FormButton icon="tasks" disabled />
      <FormButton icon="globe" disabled />
      <button
        className={`btn btn--form ${shown ? 'btn--active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          dispatch(switchState());
        }}
      >
        <span className="content-warning">CW</span>
      </button>
    </>
  );
};
