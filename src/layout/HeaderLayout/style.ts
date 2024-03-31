import styled from 'styled-components';

type PathProps = {
  $currentPath: string;
  $headerShown: boolean;
};

export const Wrapper = styled.header<PathProps>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  box-shadow: ${({ $headerShown }) =>
    $headerShown ? '' : '0px 0px 8px 0px rgba(0, 0, 0, 0.15)'};

  & .container {
    width: 70.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: ${({ $headerShown }) =>
      $headerShown ? 'space-between' : 'flex-start'};
    align-items: center;

    & .header__left {
      display: flex;
      align-items: center;
      padding: 0 10px;

      & img {
        cursor: pointer;
      }

      & ul {
        display: flex;
        align-items: center;
        margin-top: 4px;
        margin-left: 12px;

        & li {
          margin: 0px 13px;
          padding: 19px 0px;
          cursor: pointer;

          &:first-child {
            & span {
              color: ${({ $currentPath }) =>
                $currentPath === '' ? 'var(--black)' : 'var(--gray-400)'};
            }
          }

          &:nth-child(2) {
            & span {
              color: ${({ $currentPath }) =>
                $currentPath === 'community'
                  ? 'var(--black)'
                  : 'var(--gray-400)'};
            }
          }

          &:last-child {
            & span {
              color: ${({ $currentPath }) =>
                $currentPath === 'crews' ? 'var(--black)' : 'var(--gray-400)'};
            }
          }

          & span {
            font-size: 18px;
            font-weight: 400;
          }
        }
      }
    }

    & .header__right {
      & ul {
        display: flex;
        justify-content: center;
        align-items: center;

        & li {
          position: relative;
          padding: 0px 10px;
          cursor: pointer;

          & span {
            font-size: 16px;
          }

          & button {
            cursor: pointer;

            height: 50px;
            margin: 0px;
            padding: 13px 44px;
            font-size: 15px;
            font-weight: 400;
            color: var(--white);
            background: var(--green-400);
            border-radius: 14px;
          }

          &:first-child {
            & span {
              color: var(--gray-700);
            }

            &:after {
              content: '';
              position: absolute;
              width: 1px;
              height: 16px;
              background-color: var(--gray-500);
              top: 4px;
              right: 0;
            }
          }
        }
      }
    }

    & .header__title {
      color: var(--black);
      text-align: center;
      font-family: Pretendard;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.25rem;
      margin: 0 auto;
      padding-right: 4%;
    }
  }
`;
