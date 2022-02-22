import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Container } from '@mui/material';
import UserList from '../components/UserList';

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <UserList />
      </Container>
    </MainLayout>
  );
};

export default Home;
