import * as yup from 'yup';

import { AUTH_REGEXP } from './constants';

export const LoginSchema = yup.object().shape({
  // /**
  //  * 카카오톡 인증번호 연락처
  //  */
  // mobileNumber: yup
  //   .string()
  //   .required('카카오 인증번호를 받아보실 연락처를 입력해주세요.'),

  // /**
  //  * 카카오톡으로 전송된 인증번호
  //  */
  // certificationNumber: yup
  //   .string()
  //   .required('카카오톡으로 전송된 인증번호를 입력해주세요.'),

  /**
   * 이메일
   */
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(AUTH_REGEXP.email, '이메일 형식에 맞지 않습니다.'),

  /**
   * 패스워드
   */
  password: yup.string().required('패스워드를 입력해주세요.'),

  // /**
  //  * 패스워드 확인
  //  */
  // confirmPassword: yup
  //   .string()
  //   .required('패스워드를 한 번 더 입력해주세요.')
  //   .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),

  // /**
  //  * 닉네임
  //  */
  // nickName: yup.string().required('이름 혹은 별칭을 입력해주세요.'),
});
