import { ChangeEventHandler } from 'react';
import { numberExtract } from '@utils/numberExtractor';

/**
 * 숫자만 입력할 수 있게하는 커스텀 훅
 * numberExtract 함수에서 숫자가 아니면 빈문자열로 대체
 */
export const useExtractNumberHandler =
  <T extends HTMLInputElement | HTMLTextAreaElement>(): ChangeEventHandler<T> =>
  (e) => {
    const value = e.currentTarget.value;

    const onlyNumber = numberExtract(value);

    e.currentTarget.value = onlyNumber ?? '';
  };
