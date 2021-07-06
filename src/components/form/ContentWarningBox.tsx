import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';

export const testIds = {
  contentWarningBoxWrapper: 'content-warning-box-wrapper',
  contentWarningBox: 'content-warning-box',
};
interface WrapperProps {
  visible: boolean;
}

const Wrapper = styled.div`
  height: ${(props: WrapperProps) => (props.visible ? '100%' : 0)};
  opacity: ${(props: WrapperProps) => (props.visible ? 1 : 0)};
  z-index: ${(props: WrapperProps) => (props.visible ? 1 : 0)};
  margin-bottom: ${(props: WrapperProps) => (props.visible ? '1rem' : 0)};
  pointer-events: ${(props: WrapperProps) =>
    props.visible ? 'initial' : 'none'};

  transition: all 0.2s;
  transform-origin: bottom;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  outline: none;

  &::placeholder {
    color: #606984;
  }

  border-radius: 0.3rem;
  padding: 1rem;
  padding: 1.5rem;
`;

export const ContentWarningBox = (): JSX.Element => {
  const shown = useAppSelector((state) => state.contentWarning.shown);

  return (
    <Wrapper visible={shown} data-testid={testIds.contentWarningBoxWrapper}>
      <Input
        data-testid={testIds.contentWarningBox}
        type="text"
        placeholder="Write your warning here"
      />
    </Wrapper>
  );
};
