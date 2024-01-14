import React, { ReactNode } from 'react';
import { ContentsLayout } from './ContentsLayout';
import { FooterLayout } from './FooterLayout';

export type LayoutProps = {
  children: ReactNode;
};

const CommonLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <ContentsLayout>{children}</ContentsLayout>
      <FooterLayout />
    </>
  );
};

export default CommonLayout;
