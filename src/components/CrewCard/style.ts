import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 32%;
  height: fit-content;
  position: relative;
  margin: 0 1.3rem 0.75rem 0;
  background-color: var(--white);

  border-radius: 0.5rem;

  &:nth-child(3n) {
    margin-right: 0;
  }
  cursor: pointer;

  & .card__profile {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    gap: 0.5rem;
    align-self: stretch;

    & .profile__header {
      display: flex;
      align-items: center;
      line-height: 1.5rem;

      & .profile__header_image {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 624.9375rem;
        margin-right: 0.5rem;

        > img {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 624.9375rem;

          object-fit: cover;
        }
      }

      & .profile__header_name {
        color: var(--black);
        font-family: Pretendard;
        font-size: 0.825rem;
        font-weight: 600;
      }
    }

    & .profile__contents {
      > div {
        overflow: hidden;
        color: var(--black);
        text-overflow: ellipsis;
        font-family: Pretendard;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }

  & .image {
    position: relative;
    border-radius: 0.5rem 0.5rem 0rem 0rem;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0rem 0rem;
    }

    & .image__caption {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;

      display: flex;
      padding: 0.5rem;
      align-items: center;

      color: var(--white);

      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.09) 0%,
        rgba(0, 0, 0, 0.3) 100%
      );

      backdrop-filter: blur(4px);
    }
  }

  & .tag__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
`;
