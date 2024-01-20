import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 80px;
  width: 100%;

  & .container {
    width: 1080px;
    min-height: 800px;
    margin: 60px auto 0 auto;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  margin: 80px auto 0 auto;

  & .search__wrapper {
    position: absolute;
    bottom: -24%;
    left: 30%;
    z-index: 10000;
  }
`;
