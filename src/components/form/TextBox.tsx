import React, { useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeCount } from '../../store/reducers/char-counter.reducer';
import { TextArea, TextBoxWrapper } from './styled/TextBox.styled';

export const testId = 'test-box';

export const TextBox = (): JSX.Element => {
  const ref = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(changeCount(ref.current?.value.length ?? 0));
  };

  return (
    <TextBoxWrapper>
      <TextArea
        ref={ref}
        placeholder="What's on your mind?"
        name="textarea"
        data-testid={testId}
        onChange={handleOnChange}
      ></TextArea>
    </TextBoxWrapper>
  );
};
