import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { revokeToken } from '../../store/reducers/credentials.reducer';
import { PrimaryButton } from '../styled-components/buttons';
import { Icon } from './styled/Icon.styled';
import { SubmitButtonWrapper } from './styled/SubmitButton.styled';

export const SubmitButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(revokeToken());
    history.push('/auth');
  };

  return (
    <SubmitButtonWrapper>
      <Icon className="fa fa-sign-out" title="Logout" onClick={handleLogout} />
      <PrimaryButton>TOOT!</PrimaryButton>
    </SubmitButtonWrapper>
  );
};
