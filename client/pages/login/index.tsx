import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../../lauouts/MainLayout';

const Login: NextPage = () => {
  return (
    <MainLayout>
      <h2>Авторизация</h2>
      <form className="mx-auto my-4 d-flex flex-column" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </MainLayout>
  );
};

export default Login;
