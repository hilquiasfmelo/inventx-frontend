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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    margin-bottom: 27px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5px;

    &.underline {
      color: var(--white);
      font-weight: bold;
      font-size: 1rem;
      /* margin-bottom: 8px; */
    }

    &.underline::after {
      content: '';
      height: 2px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--red-500);
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
