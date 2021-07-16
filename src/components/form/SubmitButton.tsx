import React from 'react';
import { useHistory } from 'react-router-dom';
import { MastodonApi } from '../../services/mastodon-api';

import { PrimaryButton } from '../abstract-styled/buttons';
import { Icon } from './styled/Icon.styled';
import { SubmitButtonWrapper } from './styled/SubmitButton.styled';

export const SubmitButton = (): JSX.Element => {
  const history = useHistory();

  const handleLogout = () => {
    MastodonApi.getInstance().logout();
    history.push("/instance-name");
  };

  return (
    <SubmitButtonWrapper>
      <Icon className="fa fa-sign-out" title="Logout" onClick={handleLogout} />
      <PrimaryButton>TOOT!</PrimaryButton>
    </SubmitButtonWrapper>
  );
};
