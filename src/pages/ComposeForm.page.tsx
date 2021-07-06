import React from 'react';
import styled from 'styled-components';
import { CharCounter } from '../components/form/CharCounter';
import { ContentWarningBox } from '../components/form/ContentWarningBox';
import { FormButtons } from '../components/form/FormButtons';
import { SubmitButton } from '../components/form/SubmitButton';
import { TextBox } from '../components/form/TextBox';

const Form = styled.form`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const ToolBoxWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  background-color: #ebebeb;
  padding: 1rem 1.3rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
`;

export const ComposeForm = (): JSX.Element => {
  return (
    <Form action="" className="compose-form">
      <ContentWarningBox />
      <TextBox />
      <ToolBoxWrapper>
        <FormButtons />
        <CharCounter />
      </ToolBoxWrapper>
      <SubmitButton />
    </Form>
  );
};
