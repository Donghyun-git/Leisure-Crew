import { TabMenuContainer, TabLink } from './style';

const BottomTabMenu = () => {
  return (
    <TabMenuContainer>
      <TabLink to="/" exact activeClassName="active">
        홈
      </TabLink>
      <TabLink to="/community" activeClassName="active">
        커뮤니티
      </TabLink>
      <TabLink to="/crews" activeClassName="active">
        나의 크루
      </TabLink>
    </TabMenuContainer>
  );
};

export default BottomTabMenu;
