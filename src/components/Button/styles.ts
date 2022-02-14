import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 340px;
  height: 56px;
  border-radius: 0.6rem;
  border: 0;
  background: var(--red-500);
  color: var(--white);
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background: ${shade(0.2, '#A4161A')};
  }
  transition: 0.4s;
`;
