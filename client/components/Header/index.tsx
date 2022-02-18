import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { RootState } from '../../redux/reducers';

const Header: React.FC = () => {
  const { auth } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };

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
                {auth.user ? (
                  <>
                    <li>
                      <Link href="/profile">
                        <a>Профиль</a>
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
