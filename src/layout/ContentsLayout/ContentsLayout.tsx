import { LayoutProps } from '../CommonLayout';

import * as S from './style';

const ContentsLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <S.Wrapper>
      <div className="container">{children}</div>
    </S.Wrapper>
  );
};

export default ContentsLayout;
