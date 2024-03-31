import { useState } from 'react';
import { CardTag } from './CardTag';
import * as S from './style';

const test = [
  '편안',
  '20대',
  '편안한 분위기',
  '레저모임',
  '평택',
  '안산',
  '편안',
  '20대',
];

const CrewCard = () => {
  const [crewCardList] = useState<string[]>(test);

  const sliceCrewCardList = [...crewCardList].slice(0, 4);
  const sliceRest = [...crewCardList].slice(4, crewCardList.length);

  return (
    <S.Wrapper>
      <div className="image">
        <img src="/images/slide1.jpg" alt="" />
        <div className="image__caption">공격적인 음악의 크루</div>
      </div>
      <div className="card__profile">
        <div className="profile__header">
          <div className="profile__header_image">
            <img src="/images/slide2.jpg" alt="프로필 이미지" />
          </div>
          <span className="profile__header_name">홍길동 크루장</span>
        </div>
        <div className="profile__contents">
          <div>수도권 2030 친목 크루 온스쿼드! 소개글 있는 분만 받습니다.</div>
        </div>
      </div>
      <div className="tag__wrapper">
        {sliceCrewCardList.map((tag, i) => (
          <CardTag key={i} tag={tag} />
        ))}
        <CardTag
          tag={`+${sliceRest.length.toString()}`}
          style={{
            background: '#fff',
            border: '1px solid #dedede',
            color: '#000',
            marginLeft: 'auto',
          }}
        />
      </div>
    </S.Wrapper>
  );
};

export default CrewCard;
