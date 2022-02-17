import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from '@mui/material';
import { NextPage } from 'next';
import { setCookie } from 'nookies';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../components/FormField';
import MainLayout from '../../layouts/MainLayout';
import { UserApi } from '../../utils/api';
import { UserDto } from '../../utils/api/types';
import { RegisterFormSchema } from '../../utils/validations';

const Register: NextPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: UserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, 'shopToken', data.data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error: any) {
      console.warn('Ошибка при регистрации');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <MainLayout>
      <FormProvider {...form}>
        <h2 className="text-center mb-30">Регистрация</h2>
        <form
          style={{ maxWidth: '600px', margin: '0 auto' }}
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField type="text" name="name" label="Имя" />
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
            Регистрация
          </Button>
        </form>
      </FormProvider>
    </MainLayout>
  );
};

export default Register;
