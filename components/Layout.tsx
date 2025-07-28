import Head from 'next/head';
import NavBar from './NavBar';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'My Portfolio' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main className={styles.container}>{children}</main>
    </>
  );
}