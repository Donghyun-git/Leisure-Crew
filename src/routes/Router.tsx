import { Routes, Route } from 'react-router-dom';

import { PATH } from '@constants/paths';

/**
 * Routes
 */
import LoginRoute from './LoginRoute';

/**
 * components
 */
import { MainPage } from '@pages/Main';
import { CommunityPage } from '@pages/Community';
import { CrewsPage } from '@pages/Crews';
import { Login } from '@pages/Login';
import { Join } from '@pages/Join';

const Router = () => {
  return (
    <Routes>
      <Route index path={PATH.root} element={<MainPage />} />
      <Route path={PATH.community} element={<CommunityPage />} />
      <Route path={PATH.crews} element={<CrewsPage />} />

      <Route element={<LoginRoute />}>
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.join} element={<Join />} />
      </Route>
    </Routes>
  );
};

export default Router;
