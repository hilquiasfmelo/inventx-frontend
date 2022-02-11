import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: var(--red-500);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#A4161A')};
  }
  transition: 0.2s;
`;
