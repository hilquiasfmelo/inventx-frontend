import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
  background: var(--black-500);
  border-radius: 10px;

  svg {
    margin-left: 15px;
    color: var(--gray-200);
  }

  input {
    width: 340px;
    height: 56px;
    padding-left: 15px;
    font-size: 16px;
    color: var(--white);
    background: transparent;
    border: 0;
  }
`;
