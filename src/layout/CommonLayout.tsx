import { ReactNode } from 'react';
import { ContentsLayout } from './ContentsLayout';
import { FooterLayout } from './FooterLayout';

import styled from 'styled-components';

export type LayoutProps = {
  children: ReactNode;
};

const CommonLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <CommonLayoutWrapper>
      <ContentsLayout>{children}</ContentsLayout>
      <FooterLayout />
    </CommonLayoutWrapper>
  );
};

export default CommonLayout;

const CommonLayoutWrapper = styled.div`
  margin-top: 1.5rem;
`;
