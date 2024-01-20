import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/paths';

/**
 * path 리터럴 타입
 */
type PathParams = '' | 'community' | 'crews' | 'join' | 'login';

/**
 * 초기 경로가 / 일 때만 적용
 *
 * ex:) /crews, /join, /login
 * ex:) /crews/join 이면 crews/join을 넘겨야함.
 */
export const usePageMove = () => {
  const navigate = useNavigate();

  const handlePageMove = (path: PathParams) => {
    navigate(`${PATH.root}${path}`);
  };

  return { handlePageMove };
};
