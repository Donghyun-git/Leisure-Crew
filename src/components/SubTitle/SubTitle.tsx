import { Title } from './style';

type SubTitleType = {
  title: string;
  marginTop?: number;
};

const SubTitle = (props: SubTitleType) => {
  const { title, marginTop } = props;

  return <Title style={{ marginTop: marginTop === 0 ? 0 : '' }}>{title}</Title>;
};

export default SubTitle;
