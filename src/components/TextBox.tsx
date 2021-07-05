import React, { useRef } from 'react';
import '../sass/main.scss';
import { useAppDispatch } from '../store/hooks';
import { changeCount } from '../store/reducers/char-counter.reducer';

export const testId = 'test-box';

export const TextBox = (): JSX.Element => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(changeCount(ref.current?.value.length ?? 0));
  };

  return (
    <textarea
      placeholder="What's on your mind?"
      name="textarea"
      className="compose-box"
      data-testid={testId}
      ref={ref}
      onChange={handleOnChange}
    ></textarea>
  );
};
