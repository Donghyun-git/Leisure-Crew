import styled from 'styled-components';

export const SlideImage = styled.div`
  width: 100%;
  height: 600px;
  padding: 0 10px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
