// styles/TabMenu.js
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

type TabLinkPropsType = {
  exact?: boolean;
  activeClassName: '' | 'active';
};

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

export const TabLink = styled(NavLink)<TabLinkPropsType>`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  text-decoration: none;
  color: black;
  width: 33%;

  &.active {
    background-color: var(--orange-500);
    color: var(--white);
    border-radius: 24rem;
  }
`;
