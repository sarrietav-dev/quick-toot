import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../store/hooks';
import {
  authorizeUser,
  createMastodonApp,
  obtainToken,
} from '../store/reducers/credentials.thunks';
import { useForm } from 'react-hook-form';
import {
  AuthWrapper,
  AuthButton,
  HighlightedFormBox,
  Input,
} from './styled/Auth.styled';

interface FormData {
  instance: string;
}

export const Auth = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await dispatch(createMastodonApp(data.instance));
    await dispatch(obtainToken());
    history.push('/');
  });

  return (
    <AuthWrapper>
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
        <AuthButton type="submit">Authorize</AuthButton>
      </HighlightedFormBox>
    </AuthWrapper>
  );
};
