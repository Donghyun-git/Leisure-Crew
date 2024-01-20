import styled from 'styled-components';

type PathProps = {
  $currentPath: string;
};

export const Wrapper = styled.header<PathProps>`
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--white);

  & .container {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .header__left {
      display: flex;
      align-items: center;
      padding: 0 10px;

      & img {
        /* width: 300px;
        height: 200px; */
      }

      & ul {
        display: flex;
        align-items: center;

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
              top: -1px;
              right: 0;
            }
          }
        }
      }
    }
  }
`;
