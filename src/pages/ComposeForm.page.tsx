import React from 'react';
import { CharCounter } from '../components/form/CharCounter';
import { ContentWarningBox } from '../components/form/ContentWarningBox';
import { FormButtons } from '../components/form/FormButtons';
import { SubmitButton } from '../components/form/SubmitButton';
import { TextBox } from '../components/form/TextBox';
import { Form, ToolBoxWrapper } from './styled/ComposeForm.styled';

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
