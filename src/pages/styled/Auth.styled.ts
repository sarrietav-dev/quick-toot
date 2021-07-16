import styled from 'styled-components';
import { PrimaryButton } from '../../components/abstract-styled/buttons';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30rem;
`;

export const HighlightedFormBox = styled.form`
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

  a:link,
  a:visited {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Input = styled.input`
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

export const AuthButton = styled(PrimaryButton)`
  text-align: center;
`;
