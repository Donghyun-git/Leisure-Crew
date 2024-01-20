import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useUserStore } from '@store/useUserStore';
import { usePageMove } from '@hooks/usePageMove';
import { ROOT_PATH } from '@constants/paths';

const LoginRoute = () => {
  const accesstoken = useUserStore((state) => state.accesstoken);
  const { handlePageMove } = usePageMove();

  useEffect(() => {
    if (accesstoken) {
      alert('이미 로그인 되어있습니다!');
      handlePageMove(ROOT_PATH.main);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return accesstoken ? null : <Outlet />;
};

export default LoginRoute;
