import { TagWrapper } from './style';

type CardtagType = {
  tag: string;
  style?: {
    [key: string]: string;
  };
};

const CardTag = (props: CardtagType) => {
  const { tag, style } = props;

  return <TagWrapper style={style}>{tag}</TagWrapper>;
};

export default CardTag;
