import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import * as S from './style';
import { SLIDE_IMAGE_PATH } from './constants';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Slider = () => {
  return (
    <Swiper
      effect={'fade'}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, EffectFade]}
      className="mySwiper"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <SwiperSlide key={i}>
          <S.SlideImage>
            <img
              src={`${SLIDE_IMAGE_PATH}${i + 1}.jpg`}
              alt={`slide-${i + 1}`}
            />
          </S.SlideImage>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
