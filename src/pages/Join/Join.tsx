import { FieldError, useForm } from 'react-hook-form';
import { Container } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@components/Button';
import { AddressSearch } from './AddressSearch';
import { JoinSchema } from './validator';
import { HeaderLayout } from '@layout/HeaderLayout';
import { Input } from '@components/Input';

import { sendEmailAuthcodeGetFetch } from '@api/auth/mail/sendEmailAuthcodeGetFetch';

import { usePageMove } from '@hooks/usePageMove';

import * as S from './style';

export type JoinDefaultStateType = {
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  firstAddress: string;
  lastAddress: string;
};

const JoinDefaultState: JoinDefaultStateType = {
  email: '',
  password: '',
  confirmPassword: '',
  nickName: '',
  firstAddress: '',
  lastAddress: '',
};

const Join = () => {
  const { handlePageMove } = usePageMove();

  const method = useForm({
    resolver: yupResolver(JoinSchema),
    values: {
      ...JoinDefaultState,
    } as JoinDefaultStateType,
  });

  const {
    handleSubmit: submit,
    control,
    getValues,
    setValue,
    trigger,
    clearErrors,
    formState: { errors },
  } = method;

  /**
   * @todo - 회원가입 api
   */
  const handleSubmit = submit(async () => {
    try {
      console.log(getValues());
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * 이메일 인증 핸들러
   */
  const handleEmailCertificate = async () => {
    try {
      clearErrors('email');

      if (!(await trigger('email'))) return;

      const certificateRes = await sendEmailAuthcodeGetFetch({
        email: getValues('email'),
      });

      if (certificateRes.status !== 200) {
        throw new Error('다시 시도해주세요.');
      }

      console.log(certificateRes);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * 닉네임 중복 확인 핸들러
   */
  const handleNickNameDoubleCheck = async () => {
    try {
      console.log('닉네임 중복확인 핸들러');
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * 닉네임 중복 확인 핸들러
   */
  // const handleOpenDaumPost = async () => {
  //   try {
  //     console.log('주소검색 핸들러');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  console.log(getValues());

  return (
    <>
      <HeaderLayout
        headerShown={false}
        title="회원가입"
        onPathMove={() => handlePageMove('')}
      />
      <Container
        bg={'#fff'}
        maxW={'100%'}
        minH="800px"
        marginTop="10px"
        borderRadius="25px"
      >
        <S.Wrapper>
          <div className="join">
            <Input<JoinDefaultStateType>
              name="email"
              control={control}
              label="이메일"
              type="email"
              error={errors.email}
              placeholder="e-mail"
              extractNumber={false}
              addon={{
                buttonText: '이메일 인증',
                onSubmit: handleEmailCertificate,
              }}
            />
            <Input<JoinDefaultStateType>
              name="password"
              control={control}
              label="비밀번호"
              type="password"
              error={errors.password}
              extractNumber={false}
              placeholder="비밀번호 입력"
            />
            <Input<JoinDefaultStateType>
              name="confirmPassword"
              control={control}
              label="비밀번호 확인"
              type="password"
              error={errors.confirmPassword}
              extractNumber={false}
              placeholder="비밀번호 확인"
            />
            <Input<JoinDefaultStateType>
              name="nickName"
              control={control}
              label="닉네임"
              type="text"
              error={errors.nickName}
              extractNumber={false}
              placeholder="사용하실 닉네임을 입력해주세요."
              addon={{
                buttonText: '중복확인',
                onSubmit: handleNickNameDoubleCheck,
              }}
            />
            <AddressSearch<JoinDefaultStateType>
              control={control}
              onAddressChange={(addr) => {
                setValue('firstAddress', addr);
              }}
              errors={
                (errors?.firstAddress as FieldError) || errors?.lastAddress
              }
            />
            <div className="buttonArea">
              <Button buttonText="회원가입 완료" onNextMove={handleSubmit} />
            </div>
          </div>
        </S.Wrapper>
      </Container>
    </>
  );
};

export default Join;
