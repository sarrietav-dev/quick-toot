import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryButton } from '../components/styled-components/buttons';
import { useAppDispatch } from '../store/hooks';
import {
  authorizeUser,
  createMastodonApp,
  obtainToken,
} from '../store/reducers/credentials.reducer';

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
  outline-color: ${(props) => props.theme.colors.primary};

  &:invalid,
  &:required {
    outline-color: ${(props) => props.theme.colors.errorRed};
  }

  &::placeholder {
    color: #fff;
  }
`;

const AuthButton = styled(PrimaryButton)`
  text-align: center;
`;

export const Auth = (): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleOnClick = async () => {
    await dispatch(createMastodonApp());
    await dispatch(authorizeUser());
    await dispatch(obtainToken());
    history.push('/');
  };

  return (
    <Wrapper>
      <HighlightedFormBox>
        <h2>Please enter your instance address</h2>
        <Input type="text" placeholder="mastodon.example" ref={ref} required />
        <AuthButton
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleOnClick();
          }}
        >
          Authorize
        </AuthButton>
      </HighlightedFormBox>
    </Wrapper>
  );
};
