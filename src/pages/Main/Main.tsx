import CommonLayout from '../../layout/CommonLayout';
import * as S from './style';

const Main = () => {
  return (
    <>
      <CommonLayout>
        <S.Wrapper>
          <div className="category">카테고리 영역</div>
          <div className="cardBox">카드박스 영역</div>
        </S.Wrapper>
      </CommonLayout>
    </>
  );
};

export default Main;
