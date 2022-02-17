import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import 'macro-css';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Онлайн магазин'}</title>
        <meta name="description" content={`Онлайн магазин. ` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Магазин товаров'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <div className="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
