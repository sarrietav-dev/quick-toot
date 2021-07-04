import React, { useState } from 'react';
import { CharCounter } from './components/CharCounter';
import { ContentWarningBox } from './components/ContentWarningBox';
import { FormButtons } from './components/FormButtons';
import { TextBox } from './components/TextBox';
import ContentWarningContext from './context/content-warning.context';
import './sass/main.scss';

export default function App(): JSX.Element {
  const [shown, setShown] = useState(false);

  const toggleWarning = () => {
    setShown(!shown);
  };

  return (
    <ContentWarningContext.Provider value={{ shown, toggleWarning }}>
      <form action="" className="compose-form">
        <div
          className={`compose-form__content-warning-wrapper ${
            shown ? 'compose-form__content-warning-wrapper--visible' : ''
          } `}
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
    </ContentWarningContext.Provider>
  );
}
