import { useLocation } from 'react-router-dom';
import { usePageMove } from '@hooks/usePageMove';
import { ROOT_PATH } from '@constants/paths';

import * as S from './style';

type HeaderLayoutProps = {
  headerShown: boolean;
  title?: string;
  onPathMove?: () => void;
};

const HeaderLayout = (props: HeaderLayoutProps) => {
  const { headerShown, title, onPathMove } = props;

  const location = useLocation();
  const { handlePageMove } = usePageMove();

  const pathname = location.pathname;
  const splitPath = pathname.split('/');
  const currentPath = splitPath[1] ? splitPath[1] : splitPath[0];

  return (
    <S.Wrapper $currentPath={currentPath} $headerShown={headerShown}>
      <div className="container">
        <div className="header__left">
          <img
            src={
              headerShown ? '/icons/onsquad_logo.svg' : '/icons/arrow_left.svg'
            }
            alt="logo"
            onClick={onPathMove}
          />
          {/* {headerShown ? (
            <ul>
              <li onClick={() => handlePageMove(ROOT_PATH.main)}>
                <span>홈</span>
              </li>
              <li onClick={() => handlePageMove(ROOT_PATH.community)}>
                <span>커뮤니티</span>
              </li>
              <li onClick={() => handlePageMove(ROOT_PATH.crews)}>
                <span>크루들</span>
              </li>
            </ul>
          ) : null} */}
        </div>
        {headerShown ? (
          <div className="header__right">
            <ul>
              <li onClick={() => handlePageMove(ROOT_PATH.login)}>
                <span>로그인</span>
              </li>
              <li onClick={() => handlePageMove(ROOT_PATH.join)}>
                <span>회원가입</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="header__title">{title}</div>
        )}
      </div>
    </S.Wrapper>
  );
};

export default HeaderLayout;
