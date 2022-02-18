import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MainLayout from '../../layouts/MainLayout';
import { LoginFormSchema } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { Api } from '../../utils/api';
import { LoginDto } from '../../utils/api/types';
import { Alert, Button } from '@mui/material';
import { FormField } from '../../components/FormField';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectUserData, setUserData } from '../../redux/slices/user';
import router from 'next/router';

const Login: NextPage = () => {
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);
      console.log(data);
      setCookie(null, 'shopToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (error: any) {
      console.warn('Ошибка при авторизации');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (userData) {
      router.push('/');
    }
  }, [userData]);

  return (
    <MainLayout>
      <FormProvider {...form}>
        <h2 className="text-center mb-30">Авторизация</h2>
        <form
          style={{ maxWidth: '600px', margin: '0 auto' }}
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField type="email" name="email" label="Почта" />
          <FormField type="password" name="password" label="Пароль" />
          {errorMessage && (
            <Alert className="mb-20" severity="error">
              {errorMessage}
            </Alert>
          )}
          <Button
            className="mb-30"
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            disabled={!form.formState.isValid || form.formState.isSubmitting}>
            Войти
          </Button>
        </form>
      </FormProvider>
    </MainLayout>
  );
};

export default Login;
