import { ButtonWrapper } from './style';

type ButtonPropsType = {
  buttonText: string;
  onNextMove: () => void;
};

const Button = (props: ButtonPropsType) => {
  const { buttonText, onNextMove } = props;

  return (
    <ButtonWrapper onClick={onNextMove}>
      <span>{buttonText}</span>
    </ButtonWrapper>
  );
};

export default Button;
