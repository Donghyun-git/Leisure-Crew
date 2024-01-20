import { LayoutProps } from '../CommonLayout';
import { Slider } from '@components/Slider';
import { SearchBar } from '@components/SearchBar';

import * as S from './style';

const ContentsLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <S.Wrapper>
      <S.SlideWrapper>
        <Slider />
        <div className="search__wrapper">
          <SearchBar />
        </div>
      </S.SlideWrapper>
      <div className="container">{children}</div>
    </S.Wrapper>
  );
};

export default ContentsLayout;
