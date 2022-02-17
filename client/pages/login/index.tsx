import { NextPage } from 'next';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import { login } from '../../redux/actions/authAction';
import { InputChange, FormSubmit } from '../../redux/types/formType';

const Login: NextPage = () => {
  const initialState = { email: '', password: '' };
  const [userLogin, setUserLogin] = useState(initialState);
  const { email, password } = userLogin;

  const dispatch = useDispatch();

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userLogin));
  };

  return (
    <MainLayout>
      <h2>Авторизация</h2>
      <form
        className="mx-auto my-4 d-flex flex-column"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </MainLayout>
  );
};

export default Login;
