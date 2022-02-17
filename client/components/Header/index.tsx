import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const isAuth = false;

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
              {isAuth ? (
                <>
                  <Link href="#">
                    <a className="nav-link">Профиль</a>
                  </Link>
                  <Link href="#">
                    <a className="nav-link">Выйти</a>
                  </Link>
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
