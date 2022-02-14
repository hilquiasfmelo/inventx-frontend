import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--black-500);
  background: var(--black-500);
  border-radius: 10px;
  width: 340px;
  height: 56px;
  padding: 0.6rem 0.9rem;
  margin-bottom: 0.6rem;

  svg {
    color: #666360;

    &:last-child {
      margin: 0 10px;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: var(--red-500);
      }
      border-color: var(--red-500);
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--red-500);
      }
    `}

  input {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-size: 1rem;
    background: transparent;
    color: var(--white);
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  .icon-click {
    cursor: pointer;
  }
`;
