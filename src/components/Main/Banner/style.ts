import styled from 'styled-components';

export const BannerWrapper = styled.div`
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 20rem;
    min-width: 22.5rem;
    padding: 2.25rem;
    align-self: stretch;

    border-radius: 0.75rem;
    background: linear-gradient(
        267deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #144a7d; //배너 배경

    & .banner__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;

      & h2 {
        color: var(--white);
        font-family: Pretendard;
        font-size: 1.5rem;
        font-weight: 600;
      }

      & p {
        color: var(--white);
        font-family: Pretendard;
        font-size: 2.25rem;
        font-weight: 600;

        > b {
          font-size: 3rem;
          font-weight: 700;
        }
      }

      & .banner__left__last {
        color: var(--gray-white, var(--white, #fff));
        font-family: Pretendard;
        font-size: 1.5rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        > strong {
          & img {
            width: 13.25rem;
            height: 3.125rem;
          }
        }
      }
    }

    & .banner__right {
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
