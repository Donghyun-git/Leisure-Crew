import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.75rem;

  background-color: var(--orange-500);
  border-radius: 0.75rem;

  > span {
    color: var(--white);
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.25rem;
    width: 100%;
  }
`;
