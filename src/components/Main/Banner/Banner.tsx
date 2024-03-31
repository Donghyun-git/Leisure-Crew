import React from 'react';
import { BannerWrapper } from './style';

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="banner__left">
          <h2>모임이 좋았을 뿐인데 ...</h2>
          <p>
            점점 <b>부담</b>이 되고 있다면?
          </p>
          <p className="banner__left__last">
            <strong>
              <img src="/icons/onsquad_logo.svg" alt="온스쿼드" />
            </strong>
            에 합류하세요!
          </p>
        </div>
        <div className="banner__right">
          <img src="/icons/onsquad_banner_logo.svg" alt="banner_logo" />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
