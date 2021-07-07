import styled from 'styled-components';

export const TextBoxWrapper = styled.div`
  flex: 0 0 12.5rem;
`;

export const TextArea = styled.textarea`
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
