import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Login = () => {
  return (
    <MainLayout title="Авторизация">
      <Container>
        <div className="auth">
          <h1>Авторизация</h1>
          <form>
            <TextField type="email" name="email" label="Email" size="small" fullWidth />
            <TextField type="password" name="password" label="Пароль" size="small" fullWidth />
            <Button variant="contained">Войти</Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Login;
