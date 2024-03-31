import { useForm } from 'react-hook-form';
import { Container } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@components/Button';
import { LoginSchema } from './validator';
import { HeaderLayout } from '@layout/HeaderLayout';
import { Input } from '@components/Input';

import { usePageMove } from '@hooks/usePageMove';

import * as S from './style';

type LoginDefaultStateType = {
  email: string;
  password: string;
};

const LoginDefaultState: LoginDefaultStateType = {
  email: '',
  password: '',
};

const Login = () => {
  const { handlePageMove } = usePageMove();

  const method = useForm({
    resolver: yupResolver(LoginSchema),
    values: {
      ...LoginDefaultState,
    },
  });

  const {
    handleSubmit: submit,
    control,
    getValues,
    formState: { errors },
  } = method;

  /**
   * @todo - 로그인 api 달아야됨
   */
  const handleSubmit = submit(async () => {
    try {
      console.log(getValues());
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <HeaderLayout
        headerShown={false}
        title="로그인"
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
          <div className="login">
            <Input<LoginDefaultStateType>
              name="email"
              control={control}
              label="이메일"
              type="email"
              error={errors.email}
              placeholder="e-mail"
              extractNumber={false}
            />
            <Input<LoginDefaultStateType>
              name="password"
              control={control}
              label="패스워드"
              type="password"
              error={errors.password}
              extractNumber={false}
              placeholder="password"
            />

            <div className="buttonArea">
              <Button buttonText="로그인" onNextMove={handleSubmit} />
            </div>
          </div>
        </S.Wrapper>
      </Container>
    </>
  );
};

export default Login;
