import React from 'react';
import { CharCounter } from './components/CharCounter';
import { FormButtons } from './components/FormButtons';
import { TextBox } from './components/TextBox';
import './sass/main.scss';

export default function App(): JSX.Element {
  return (
    <form action="" className="compose-form">
      <div className="compose-form__content-warning-wrapper"></div>
      <div className="compose-form__textbox-wrapper">
        <TextBox />
      </div>
      <div className="compose-form__buttons-wrapper">
        <FormButtons />
        <CharCounter />
      </div>
      <div className="compose-form__submit-wrapper">
        <button type="submit" className="btn btn--submit">
          Toot!
        </button>
      </div>
    </form>
  );
}
