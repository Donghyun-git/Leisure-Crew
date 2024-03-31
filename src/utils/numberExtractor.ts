/**
 * 숫자만 필터링하는 util 함수
 */
export const numberExtract = (value: string) =>
  value.match(/\d*/g)?.filter(Boolean).join('');
