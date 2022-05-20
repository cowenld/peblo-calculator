import { NextPage } from 'next';
import { ComponentType, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: () => ReactNode;
  layout?: ComponentType;
};
