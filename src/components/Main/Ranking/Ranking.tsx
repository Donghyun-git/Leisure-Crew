import { SubTitle } from '@components/SubTitle';
import { Button } from '@components/Button';

import * as S from './style';

/**
 * @todo - card caption 조건부 렌더링
 */
const Ranking = () => {
  const handleCrewCreate = () => {
    console.log('크루 개설하기');
  };

  return (
    <S.Wrapper>
      <div className="card__header">
        <SubTitle title="크루 랭킹" marginTop={0} />
        <button onClick={() => console.log('더보기')}>더보기</button>
      </div>
      <div className="card__contents">
        <div className="caption">크루 랭킹이 없습니다.</div>
        <Button buttonText="크루 개설하기" onNextMove={handleCrewCreate} />
      </div>
    </S.Wrapper>
  );
};

export default Ranking;
