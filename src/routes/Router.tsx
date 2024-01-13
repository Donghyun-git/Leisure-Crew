import { Routes, Route } from 'react-router-dom';

import { PATH } from '@constants/common';

/**
 * components
 */
import { Main } from '@pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.root} index element={<Main />} />
    </Routes>
  );
};

export default Router;
