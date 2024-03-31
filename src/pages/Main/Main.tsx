import { HeaderLayout } from '../../layout/HeaderLayout';
import CommonLayout from '../../layout/CommonLayout';
import { SubTitle } from '@components/SubTitle';
import { CrewCard } from '@components/CrewCard';
import { Banner } from '@components/Main/Banner';
import { SearchBar } from '@components/SearchBar';
import { RankingCard } from '@components/Main/Ranking';
import { JoinCrewCard } from '@components/Main/JoinCrew';

import * as S from './style';

const Main = () => {
  return (
    <>
      <HeaderLayout headerShown={true} />
      <CommonLayout>
        <S.Wrapper>
          <div className="container">
            <Banner />
            <SearchBar />

            <div className="ranking">
              <RankingCard />
              <JoinCrewCard />
            </div>
            <SubTitle title="모집중인 크루" />
            <div className="card__box">
              {Array.from({ length: 12 }).map((item, i) => (
                <CrewCard key={i} />
              ))}
            </div>
          </div>
        </S.Wrapper>
      </CommonLayout>
    </>
  );
};

export default Main;
