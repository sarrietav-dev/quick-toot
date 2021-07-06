import React, { useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeCount } from '../../store/reducers/char-counter.reducer';
import styled from 'styled-components';

export const testId = 'test-box';

const Wrapper = styled.div`
  flex: 0 0 12.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  outline: none;

  &::placeholder {
    color: #606984;
  }

  resize: none;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  padding: 1.5rem;
`;

export const TextBox = (): JSX.Element => {
  const ref = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(changeCount(ref.current?.value.length ?? 0));
  };

  return (
    <Wrapper>
      <TextArea
        ref={ref}
        placeholder="What's on your mind?"
        name="textarea"
        data-testid={testId}
        onChange={handleOnChange}
      ></TextArea>
    </Wrapper>
  );
};
