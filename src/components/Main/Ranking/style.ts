import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 22%;
  margin-right: 1%;
  border-radius: 0.75rem;
  background: var(--white);
  padding: 1.5rem;

  & .card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      color: var(--gray-400);
    }
  }

  & .card__contents {
    min-height: 17rem;
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.25rem;

    & .caption {
    }
  }
`;
