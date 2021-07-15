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
  authCode: string;
}

export const AuthCode = (): JSX.Element => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormData>();

  // TODO: Validate the auth code by sending the token request.
  const onSubmit = handleSubmit((data) => {
    const api = MastodonApi.getInstance();
    api.setAuthCode(data.authCode);
    api.getAccessToken().then((data) => {
      api.setAccessToken(data);
      history.push('/');
    });
  });

  return (
    <Wrapper>
      <HighlightedFormBox onSubmit={onSubmit}>
        <h2>
          Place paste the authentication code from{' '}
          <a
            href={MastodonApi.getInstance().getAuthCodeUrl()}
            target="_blank"
            rel="noreferrer"
          >
            this site
          </a>{' '}
          here
        </h2>
        <Input
          type="text"
          placeholder="Paste your code here"
          required
          title="Enter a correct instance name"
          {...register('authCode', { required: true })}
        />
        <AuthButton type="submit">Authorize</AuthButton>
      </HighlightedFormBox>
    </Wrapper>
  );
};
