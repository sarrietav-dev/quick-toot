import React from 'react';
import { CharCounter } from './components/CharCounter';
import { ContentWarningBox } from './components/ContentWarningBox';
import { FormButtons } from './components/FormButtons';
import { TextBox } from './components/TextBox';
import './sass/main.scss';
import { useAppSelector } from './store/hooks';

export const testIds = {
  contentWarningBoxWrapper: 'content-warning-box-wrapper',
};

export default function App(): JSX.Element {
  const shown = useAppSelector((state) => state.contentWarning.shown);

  const getCWClassName = () =>
    `compose-form__content-warning-wrapper ${
      shown ? 'compose-form__content-warning-wrapper--visible' : ''
    } `;

  return (
    <form action="" className="compose-form">
      <div
        className={getCWClassName()}
        data-testid={testIds.contentWarningBoxWrapper}
      >
        <ContentWarningBox />
      </div>
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
