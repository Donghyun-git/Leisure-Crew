import { useLocation } from 'react-router-dom';
import { ROOT_PATH } from '@constants/paths';
import { TabMenuContainer, TabLink } from './style';

const BottomTabMenu = () => {
  const { pathname } = useLocation();

  const rootPath = pathname.split('/')[1];

  return (
    <TabMenuContainer>
      <TabLink to="/community">
        {rootPath === ROOT_PATH.community ? (
          <img src="/icons/search_crew_white.svg" alt="search_icon" />
        ) : (
          <img src="/icons/search_crew_gray.svg" alt="search_icon" />
        )}
        <span>크루 탐색</span>
      </TabLink>
      <TabLink to="/">
        {rootPath === ROOT_PATH.main ? (
          <img src="/icons/home_white.svg" alt="home_icon" />
        ) : (
          <img src="/icons/home_gray.svg" alt="home_icon" />
        )}
        <span>홈</span>
      </TabLink>
      <TabLink to="/crews">
        {rootPath === ROOT_PATH.crews ? (
          <img src="/icons/mycrew_white.svg" alt="mycrew_icon" />
        ) : (
          <img src="/icons/mycrew_gray.svg" alt="mycrew_icon" />
        )}
        <span>나의 크루</span>
      </TabLink>
    </TabMenuContainer>
  );
};

export default BottomTabMenu;
