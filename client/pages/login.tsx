import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import { login } from '../redux/actions/authAction';
import { FormSubmit, InputChange } from '../redux/types/formType';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const dispatch = useDispatch();

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <MainLayout title="Авторизация">
      <Container>
        <div className="auth">
          <h1>Авторизация</h1>
          <form onSubmit={handleSubmit}>
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
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Login;
