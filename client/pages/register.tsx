import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Register = () => {
  return (
    <MainLayout title="Регистрация">
      <Container>
        <div className="auth">
          <h1>Регистрация</h1>
          <form>
            <TextField type="text" name="name" label="Имя" size="small" fullWidth />
            <TextField type="email" name="email" label="Email" size="small" fullWidth />
            <TextField type="password" name="password" label="Пароль" size="small" fullWidth />
            <Button variant="contained">Зарегистрироваться</Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Register;
