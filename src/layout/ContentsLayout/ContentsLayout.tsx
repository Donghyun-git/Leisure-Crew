import { LayoutProps } from '../CommonLayout';

const ContentsLayout = (props: LayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default ContentsLayout;
