import { NextPage } from 'next';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { FormSubmit, InputChange } from '../../redux/types/formType';

const Register: NextPage = () => {
  const initialState = { name: '', email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password } = userData;

  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <MainLayout>
      <h2>Регистрация</h2>
      <form
        className="mx-auto my-4 d-flex flex-column"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
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
          Зарегистрироваться
        </button>
      </form>
    </MainLayout>
  );
};

export default Register;
