import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 70.5rem;
  margin: 0 auto;

  & .container {
    margin: 0 auto;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  margin: 0 auto;

  & .search__wrapper {
    margin: 0 auto;
    z-index: 10000;
  }
`;
