import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  AuthButton,
  HighlightedFormBox,
  Input,
} from './styled/Auth.styled';
import { setAuthCode } from '../store/reducers/credentials.reducer';
import { obtainToken } from '../store/reducers/credentials.thunks';

interface FormData {
  authCode: string;
}

export const AuthCode = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormData>();

  // TODO: Validate the auth code by sending the token request.
  const onSubmit = handleSubmit((data) => {
    dispatch(setAuthCode(data.authCode));
    dispatch(obtainToken());
    history.replace('/');
  });

  return (
    <Wrapper>
      <HighlightedFormBox onSubmit={onSubmit}>
        <h2>Place paste the authentication code here</h2>
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
