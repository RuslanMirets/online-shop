import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <MainLayout title="Авторизация">
      <Container>
        <div className="auth-form">
          <h1>Авторизация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              {...register('email')}
            />
            <TextField
              type="password"
              label="Пароль"
              variant="outlined"
              fullWidth
              size="small"
              {...register('password')}
            />
            <Button type="submit" variant="contained">
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Login;
