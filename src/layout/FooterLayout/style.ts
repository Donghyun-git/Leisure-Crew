import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 20rem;
  background-color: var(--gray-800);
  margin-top: 3.25rem;

  & .container {
    margin: 0 auto;
    padding: 0 10px;
    height: 200px;

    & .information {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.75rem;

      padding-top: 2.25rem;

      & .image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.25rem;

        > img {
          width: 2.875rem;
          height: 2.75rem;
          object-fit: cover;
        }
      }

      & h3 {
        color: var(--orange-500);

        font-family: Pretendard;
        font-size: 1rem;
        font-weight: 700;
      }
    }

    & .address {
      display: flex;
      gap: 1.5rem;
      margin: 0 auto;

      > address {
        color: var(--gray-500);
      }

      > span {
        position: relative;
        color: var(--gray-500);

        &::before {
          content: '';
          position: absolute;
          top: 6px;
          left: -12px;
          width: 0.1rem;
          height: 0.8rem;
          background-color: var(--gray-500);
        }
      }
    }

    & .navLink {
      & ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1.5rem;

        & li {
          color: var(--gray-500);
          cursor: pointer;
        }
      }
    }
  }
`;
