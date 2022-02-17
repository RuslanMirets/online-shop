import { NextPage } from 'next';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MainLayout from '../../layouts/MainLayout';
import { LoginFormSchema } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { UserApi } from '../../utils/api';
import { LoginDto } from '../../utils/api/types';
import { Alert, Button } from '@mui/material';
import { FormField } from '../../components/FormField';

const Login: NextPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      console.log(data);
      setCookie(null, 'shopToken', data.data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error: any) {
      console.warn('Ошибка при авторизации');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <MainLayout>
      <FormProvider {...form}>
        <h2 className="text-center mb-30">Авторизация</h2>
        <form
          style={{ maxWidth: '600px', margin: '0 auto' }}
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField type="email" name="email" label="Почта" />
          <FormField type="password" name="password" label="Почта" />
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
