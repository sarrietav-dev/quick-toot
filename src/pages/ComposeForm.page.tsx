import React, { createContext } from 'react';
import { Control, useForm, UseFormRegister } from 'react-hook-form';
import { CharCounter } from '../components/form/CharCounter';
import { ContentWarningBox } from '../components/form/ContentWarningBox';
import { FormButtons } from '../components/form/FormButtons';
import { SubmitButton } from '../components/form/SubmitButton';
import { TextBox } from '../components/form/TextBox';
import { MastodonApi } from '../services/mastodon-api';
import { Form, ToolBoxWrapper } from './styled/ComposeForm.styled';

export interface FormData {
  status: string;
  spoilerText: string;
}

interface ContextType {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
}

export const FormContext = createContext<ContextType | undefined>(undefined);

export const ComposeForm = (): JSX.Element => {
  const { control, handleSubmit, register } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    const api = MastodonApi.getInstance();
    api
      .postStatus({ status: data.status, spoiler_text: data.spoilerText })
      .then(() => window.close());
  });

  return (
    <FormContext.Provider value={{ control, register }}>
      <Form action="" onSubmit={onSubmit}>
        <ContentWarningBox />
        <TextBox />
        <ToolBoxWrapper>
          <FormButtons />
          <CharCounter />
        </ToolBoxWrapper>
        <SubmitButton />
      </Form>
    </FormContext.Provider>
  );
};
