import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectUserData, setUserData } from '../../redux/slices/user';

const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const logout = (data: any) => {
    destroyCookie(null, 'shopToken', null);
    data = null;
    dispatch(setUserData(data));
  };

  return (
    <header className="header mb-40">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar className="d-flex justify-between">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Link href="/">
                <a>LOGO</a>
              </Link>
            </Typography>
            <Box className="d-flex" style={{ gap: '10px' }}>
              <Link href="/">
                <a className="nav-link">Главная</a>
              </Link>
              <Link href="/about">
                <a className="nav-link">О нас</a>
              </Link>
              {userData ? (
                <>
                  <Link href="#">
                    <a className="nav-link">Профиль</a>
                  </Link>
                  <div className='cu-p' onClick={logout}>Выйти</div>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="nav-link">Войти</a>
                  </Link>
                  <Link href="/register">
                    <a className="nav-link">Зарегистрироваться</a>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
