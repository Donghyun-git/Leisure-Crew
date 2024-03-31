import { Wrapper } from './style';

export type InputButtonPropsType = {
  buttonText: string;
  onSubmit: () => void;
};

const InputButton = (props: InputButtonPropsType) => {
  const { buttonText, onSubmit } = props;
  return <Wrapper onClick={onSubmit}>{buttonText}</Wrapper>;
};

export default InputButton;
