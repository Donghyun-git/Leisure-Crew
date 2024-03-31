import { SubTitle } from '@components/SubTitle';

import * as S from './style';

const JoinCrew = () => {
  return (
    <S.Wrapper>
      <div className="card__header">
        <SubTitle title="크루에 합류하기" marginTop={0} />
      </div>
      <div className="card__contents">
        <div>크루를 개설하고 크루원을 모집하세요.</div>
      </div>
    </S.Wrapper>
  );
};

export default JoinCrew;
