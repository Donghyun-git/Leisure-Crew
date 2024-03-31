import styled from 'styled-components';

export const SlideWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #dbdbdb;
`;
export const Wrapper = styled.div`
  & .container {
    & .ranking {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      margin-top: 3.75rem;
    }

    & .card__box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 1.5rem 0;
    }
  }
`;
