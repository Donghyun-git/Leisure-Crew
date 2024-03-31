import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 74%;
  margin-left: 1%;
  border-radius: 0.75rem;
  background: var(--white);
  padding: 1.5rem;

  & .card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .card__contents {
    min-height: 17rem;
    margin-top: 1.5rem;

    > div {
      color: var(--black);

      font-family: Pretendard;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;
