import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { logout } from '../../redux/actions/auth';
import { profile } from '../../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Header: React.FC = () => {
  const userData = useAppSelector((state) => state.auth.authData);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(profile());
  }, [profile]);

  return (
    <header className="header">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/">
                  <a>ONLINE-SHOP</a>
                </Link>
              </Typography>
              <ul style={{ display: 'flex', gap: '20px' }}>
                <li>
                  <Link href="/about">
                    <a>О нас</a>
                  </Link>
                </li>
                {userData ? (
                  <>
                    <li>
                      <Link href={`/profile/${userData?.id}`}>
                        <a>Профиль | {userData?.name}</a>
                      </Link>
                    </li>
                    <li style={{ cursor: 'pointer' }} onClick={handleLogout}>
                      Выйти
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login">
                        <a>Войти</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/register">
                        <a>Зарегистрироваться</a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
