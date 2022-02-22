import { Button, Container, TextField } from '@mui/material';
import router from 'next/router';
import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { register } from '../redux/actions/auth';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { InputChange, FormSubmit } from '../types/form';

const Register = () => {
  const user = useAppSelector((state) => state.auth.authData);
  const dispatch = useAppDispatch();

  const initialState = { name: '', email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password } = userData;

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  return (
    <MainLayout title="Регистрация">
      <Container>
        <div className="auth">
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="name"
              label="Имя"
              size="small"
              fullWidth
              value={name}
              onChange={handleChangeInput}
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              size="small"
              fullWidth
              value={email}
              onChange={handleChangeInput}
            />
            <TextField
              type="password"
              name="password"
              label="Пароль"
              size="small"
              fullWidth
              value={password}
              onChange={handleChangeInput}
            />
            <Button type="submit" variant="contained">
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Register;
