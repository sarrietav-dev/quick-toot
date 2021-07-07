import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryButton } from '../components/styled-components/buttons';
import { useAppDispatch } from '../store/hooks';
import {
  authorizeUser,
  createMastodonApp,
  obtainToken,
} from '../store/reducers/credentials.reducer';
import { useForm } from 'react-hook-form';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30rem;
`;

const HighlightedFormBox = styled.form`
  background-color: ${(props) => props.theme.colors.baseColor};
  width: 75%;
  padding: 4rem;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: ${(props) => props.theme.colors.classicSecondaryColor};
  }
`;

const Input = styled.input`
  width: 100%;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  margin: 2rem 0;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.inputs.bgDark};
  color: #fff;

  &:focus {
    &:invalid,
    &:required {
      outline: ${(props) => props.theme.colors.errorRed} solid 0.2rem;
    }

    &:valid {
      outline: ${(props) => props.theme.colors.successGreen} solid 0.2rem;
    }
  }

  &::placeholder {
    color: #fff;
  }
`;

const AuthButton = styled(PrimaryButton)`
  text-align: center;
`;

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
    history.push("/");
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
        <AuthButton type="submit">Authorize</AuthButton>
      </HighlightedFormBox>
    </Wrapper>
  );
};
