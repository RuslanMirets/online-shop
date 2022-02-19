import { Container } from '@mui/material';
import type { NextPage } from 'next';
import UserList from '../components/UserList';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Home page</h1>
        <UserList />
      </Container>
    </MainLayout>
  );
};

export default Home;
