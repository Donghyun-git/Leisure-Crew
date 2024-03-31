import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const TabMenuContainer = styled.div`
  width: 73%;
  margin: 0 auto;
  border-radius: 24rem;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const TabLink = styled(NavLink)`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  text-decoration: none;
  color: black;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;

  > span {
    font-size: 0.78rem;
    color: var(--gray-100);
  }

  &.active {
    background-color: var(--orange-500);
    border-radius: 24rem;

    > span {
      color: var(--white);
    }
  }
`;
