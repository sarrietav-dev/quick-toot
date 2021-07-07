import styled from 'styled-components';

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 1rem;

  i {
    color: ${(props) => props.theme.colors.classicSecondaryColor};
    font-size: 3rem;

    &:hover {
      transform: translateY(-0.4rem);
    }

    &:active {
      transform: translateY(-0.2rem);
    }
  }
`;
