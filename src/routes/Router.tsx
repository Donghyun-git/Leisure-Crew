import { Routes, Route } from 'react-router-dom';

import { PATH } from '@constants/paths';

/**
 * components
 */
import { MainPage } from '@pages/Main';
import { CommunityPage } from '@pages/Community';
import { CrewsPage } from '@pages/Crews';

const Router = () => {
  return (
    <Routes>
      <Route index path={PATH.root} element={<MainPage />} />
      <Route path={PATH.community} element={<CommunityPage />} />
      <Route path={PATH.crews} element={<CrewsPage />} />
    </Routes>
  );
};

export default Router;
