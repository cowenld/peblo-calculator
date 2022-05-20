import Head from 'next/head';
import React from 'react';
import styles from './Layout.module.css';

export interface ILayout {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Peblo Calculator</title>
        <meta name="description" content="Peblo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
