import { useLocation } from 'react-router-dom';
// import { usePageMove } from '@hooks/usePageMove';
// import { ROOT_PATH } from '@constants/paths';

import * as S from './style';

const HeaderLayout = () => {
  const location = useLocation();
  // const { handlePageMove } = usePageMove();

  const pathname = location.pathname;
  const splitPath = pathname.split('/');
  const currentPath = splitPath[1] ? splitPath[1] : splitPath[0];

  return (
    <S.Wrapper $currentPath={currentPath}>
      <div className="container">
        <div className="header__left">
          <img src="/icons/onsquad_logo.svg" alt="logo" />
          {/* <ul>
            <li onClick={() => handlePageMove(ROOT_PATH.main)}>
              <span>홈</span>
            </li>
            <li onClick={() => handlePageMove(ROOT_PATH.community)}>
              <span>커뮤니티</span>
            </li>
            <li onClick={() => handlePageMove(ROOT_PATH.crews)}>
              <span>크루들</span>
            </li>
          </ul> */}
        </div>
        {/* <div className="header__right">
          <ul>
            <li>
              <span>로그인</span>
            </li>
            <li>
              <span>회원가입</span>
            </li>
            <li>
              <button>크루 모집</button>
            </li>
          </ul>
        </div> */}
      </div>
    </S.Wrapper>
  );
};

export default HeaderLayout;
