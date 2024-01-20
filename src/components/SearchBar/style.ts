import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 5rem;

  display: flex;
  align-items: center;

  & .search__icon {
    position: absolute;
    left: 20px;
  }

  & .search__area {
    & input {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 600px;
      padding: 20px 14px 20px 60px;
      font-size: 24px;
      font-weight: 200;
      background-color: var(--white);
      border: 1px solid rgb(233, 233, 233);
      border-radius: 20px;
      box-shadow: rgba(25, 25, 25, 0.35) 0px 4px 20px 0px;
      caret-color: var(--orange-400);

      &:focus {
        outline: 2px solid var(--orange-400);
      }
    }
  }

  & .search__caption {
    position: absolute;
    top: 36%;
    left: 10%;
    cursor: text;

    & p {
      font-size: 24px;
      font-weight: 300;
      color: var(--black);
      text-align: left;
      text-indent: 5px;
      letter-spacing: -0.4px;
      word-break: keep-all;
      user-select: none;
      -webkit-user-drag: none;

      & span {
        font-size: 22px;
        color: var(--gray-300);
      }
    }
  }
`;
