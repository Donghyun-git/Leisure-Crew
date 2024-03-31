import {
  Controller,
  Control,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
} from '@chakra-ui/react';

import { InputButton } from '@components/InputButton';
import { InputButtonPropsType } from '@components/InputButton/InputButton';

import { useExtractNumberHandler } from '../../hooks/useExtractNumberHandler';

import { Wrapper } from './style';

interface InputBoxPropsType<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  helperText?: string;
  error?: FieldError;
  type: 'email' | 'text' | 'password';
  control: Control<T>;
  extractNumber: boolean;
  addon?: InputButtonPropsType;
  placeholder?: string;
  value?: string;
}

/**
 * ReactHookForm 과 같이 사용하기 위한 Chakra UI InputForm 컴포넌트
 */
const InputBox = <T extends FieldValues>(props: InputBoxPropsType<T>) => {
  const {
    name,
    label,
    control,
    type,
    error,
    helperText,
    extractNumber,
    addon,
    value,
    ...rest
  } = props;

  const handleExtractNumber = useExtractNumberHandler();

  return (
    <FormControl isInvalid={error ? true : false}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Wrapper>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
              <Input
                position="relative"
                border="1px solid #d9d9d9"
                sx={{
                  '&:hover': {
                    borderColor: error ? '' : 'var(--orange-400)',
                  },
                  '&:focus': {
                    outlineColor: error ? '#E53E3E' : 'var(--orange-400)',
                  },
                  '&:focus-visible': {
                    borderColor: error ? '#E53E3E' : 'var(--orange-400)',
                    boxShadow: error ? '0 0 0 1px #E53E3E' : 'none',
                  },
                }}
                id={name}
                type={type}
                value={value}
                onChange={extractNumber ? handleExtractNumber : onChange}
                {...rest}
              />
              {addon ? (
                <InputButton
                  buttonText={addon?.buttonText}
                  onSubmit={addon?.onSubmit}
                />
              ) : null}
            </InputGroup>

            {error ? (
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            ) : helperText ? (
              <FormHelperText>{helperText}</FormHelperText>
            ) : null}
          </Wrapper>
        )}
      />
    </FormControl>
  );
};

export default InputBox;
