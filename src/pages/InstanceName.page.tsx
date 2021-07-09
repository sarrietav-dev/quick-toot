import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../store/hooks';
import { createMastodonApp } from '../store/reducers/credentials.thunks';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  AuthButton,
  HighlightedFormBox,
  Input,
} from './styled/Auth.styled';

interface FormData {
  instance: string;
}

export const InstanceNamePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormData>();

  // TODO: Validate instance name is correct sending the auth request.
  const onSubmit = handleSubmit((data) => {
    dispatch(createMastodonApp(data.instance)).then(() =>
      history.replace('/auth-code'),
    );
  });

  return (
    <Wrapper>
      <HighlightedFormBox onSubmit={onSubmit}>
        <h2>Please enter your instance address</h2>
        <Input
          type="text"
          placeholder="mastodon.example"
          required
          title="Enter a correct instance name"
          pattern=".+\..+"
          {...register('instance', { required: true, pattern: /.+\..+/ })}
        />
        <AuthButton type="submit">Next</AuthButton>
      </HighlightedFormBox>
    </Wrapper>
  );
};
