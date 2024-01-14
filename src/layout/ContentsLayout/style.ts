import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 80px;
  width: 100%;

  & .container {
    width: 1200px;
    min-height: 800px;
    margin: 60px auto 0 auto;
    padding: 0 10px;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 1200px;
  height: 600px;
  margin: 80px auto 0 auto;

  & .search__wrapper {
    position: absolute;
    bottom: -6%;
    left: 25%;
    z-index: 10000;
  }
`;
