import { Container } from '@mui/material';
import { NextPage } from 'next';
import router from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { useAppSelector } from '../../redux/hooks';

const Profile: NextPage = () => {
  const user = useAppSelector(state => state.auth.data)

  useEffect(() => {
    if (user === null) {
      router.push('/')
    }
  }, [user])

  return (
    <MainLayout>
      <Container>
        {user?.name}
      </Container>
    </MainLayout>
  );
};

export default Profile;
