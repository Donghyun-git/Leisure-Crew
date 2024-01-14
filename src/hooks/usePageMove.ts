import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/paths';

type PathParams = '' | 'community' | 'crews';

export const usePageMove = () => {
  const navigate = useNavigate();

  const handlePageMove = (path: PathParams) => {
    navigate(`${PATH.root}${path}`);
  };

  return { handlePageMove };
};
