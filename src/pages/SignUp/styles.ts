import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.section`
  max-width: 600px;

  button {
    margin-top: 0.9rem;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 50px;
  border: 1px solid var(--gray-500);
  border-radius: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5px;

    &.underline {
      color: var(--white);
      font-weight: bold;
      font-size: 1rem;
    }

    &.underline::after {
      content: '';
      height: 2px;
      border-radius: 3px 3px 0 0;
      width: 50%;
      position: absolute;
      bottom: 0;
      left: 1;
      background: var(--red-500);
    }
  }
`;

export const FormAction = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  color: var(--white);
  font-size: 0.9rem;
  margin-left: 5px;

  a {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 5px;
      font-size: 0.9rem;
      color: var(--red-500);
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      color: ${shade(0.4, '#A4161A')};

      svg {
        color: var(--white);
        color: ${shade(0.4, '#fff')};
        transition: color 0.4s;
      }
    }
    transition: 0.4s;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
