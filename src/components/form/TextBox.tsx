import React, { ChangeEvent, useContext, useState } from 'react';
import { Controller, useController } from 'react-hook-form';
import { FormContext } from '../../pages/ComposeForm.page';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeCount } from '../../store/reducers/char-counter.reducer';
import { TextArea, TextBoxWrapper } from './styled/TextBox.styled';

export const testId = 'test-box';

export const TextBox = (): JSX.Element => {
  const { maxChar } = useAppSelector((state) => state.charCounter);
  const { control } = useContext(FormContext)!;

  const dispatch = useAppDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeCount(event.target.textLength));
  };

  return (
    <TextBoxWrapper>
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange } }) => (
          <TextArea
            placeholder="What's on your mind?"
            data-testid={testId}
            onChange={(e) => {
              onChange(e);
              handleOnChange(e);
            }}
          />
        )}
        rules={{ maxLength: maxChar, required: true }}
      />
    </TextBoxWrapper>
  );
};
