import { Container } from '@mui/material';
import { NextPage } from 'next';
import router from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Profile: NextPage = () => {
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.auth.authData);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (authData === null) {
      router.push('/');
    }
  }, [authData]);

  return (
    <MainLayout>
      <Container>
        <div>
          {user?.name} | {user?.role[0].description}
        </div>
      </Container>
    </MainLayout>
  );
};

export default Profile;
