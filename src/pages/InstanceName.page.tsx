import React from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import {
  Wrapper,
  AuthButton,
  HighlightedFormBox,
  Input,
} from './styled/Auth.styled';
import { MastodonApi } from '../services/mastodon-api';

interface FormData {
  instance: string;
}

export const InstanceNamePage = (): JSX.Element => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormData>();

  // TODO: Validate instance name is correct sending the auth request.
  const onSubmit = handleSubmit((data) => {
    const api = MastodonApi.getInstance(data.instance);
    api.getClientCredentials().then((value) => {
      api.setClientCredentials(value);

      history.replace('/auth-code');
    });
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
