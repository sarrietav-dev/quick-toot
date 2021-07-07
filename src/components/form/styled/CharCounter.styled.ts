import styled from 'styled-components';

interface StyledCharCounterProps {
  negative: boolean;
}

export const StyledCharCounter = styled.div`
  margin-left: auto;
  margin-right: 0.9rem;
  display: flex;
  align-items: center;
  color: ${(props: StyledCharCounterProps) =>
    props.negative ? '#ff5050' : '#606984'};
  font-weight: 600;
  font-size: 1.5rem;
`;
