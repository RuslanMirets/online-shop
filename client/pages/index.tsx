import { Container } from '@mui/material';
import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Home page</h1>
      </Container>
    </MainLayout>
  );
};

export default Home;
