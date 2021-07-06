import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';

export const testId = 'char-counter';

interface StyledCharCounterProps {
  negative: boolean;
}

const StyledCharCounter = styled.div`
  margin-left: auto;
  margin-right: 0.9rem;
  display: flex;
  align-items: center;
  color: ${(props: StyledCharCounterProps) =>
    props.negative ? '#ff5050' : '#606984'};
  font-weight: 600;
  font-size: 1.5rem;
`;

export const CharCounter = (): JSX.Element => {
  const { currentCount } = useAppSelector((state) => state.charCounter);

  return (
    <StyledCharCounter negative={currentCount < 0} data-testid={testId}>
      {currentCount}
    </StyledCharCounter>
  );
};
