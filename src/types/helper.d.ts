/**
 * 리터럴 타입 뽑아내기
 */
type PropType<T, K extends keyof T> = T[K];

/**
 * array 타입 뽑아내기
 */
type ArrayType<P extends Array> = P extends Array<infer T> ? T : unknown;

/**'
 * Return 타입 추론
 */
type ReturnType<T> = T extends () => infer R ? R : unknown;

/**
 * extends
 */
type SpreadProp<T, U> = {
  [K in keyof U]: K extends keyof T ? PropType<T, K> : U[K];
} & T;
