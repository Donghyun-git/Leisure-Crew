import { useLocation } from 'react-router-dom';

import { LayoutProps } from '../CommonLayout';
import { Slider } from '@components/Slider';
import { SearchBar } from '@components/SearchBar';

import * as S from './style';

const ContentsLayout = (props: LayoutProps) => {
  const location = useLocation();
  const splitPath = location.pathname.split('/')[1] ?? '';

  const { children } = props;
  return (
    <S.Wrapper>
      {splitPath !== 'crews' ? (
        <S.SlideWrapper>
          <Slider />
          <div className="search__wrapper">
            <SearchBar></SearchBar>
          </div>
        </S.SlideWrapper>
      ) : null}

      <div className="container">{children}</div>
    </S.Wrapper>
  );
};

export default ContentsLayout;
