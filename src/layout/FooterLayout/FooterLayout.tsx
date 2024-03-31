import * as S from './style';

const FooterLayout = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="information">
          <div className="header">
            <div className="image">
              <img src="/icons/onsquad_logo_small.svg" alt="온스쿼드" />
              <h3>온스쿼드</h3>
            </div>
          </div>
          <div className="address">
            <address>©COPYRIGHT Join Crew On ONSQUAD</address>
            <span>CONTACT: ax34554@gmail.com</span>
          </div>
          <div className="navLink">
            <ul>
              <li>온스쿼드 소개</li>
              <li>이용약관</li>
              <li>개인정보 취급방침</li>
              <li>의견 보내기</li>
            </ul>
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default FooterLayout;
