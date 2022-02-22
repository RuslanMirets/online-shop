import { Container } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const userData = false;

  return (
    <header className="header">
      <Container>
        <div className="body">
          <Link href="/">
            <a className="logo">LOGO</a>
          </Link>
          <ul className="menu">
            <li>
              <Link href="#">
                <a>Каталог</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>О нас</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Контакты</a>
              </Link>
            </li>
          </ul>
          <ul className="actions">
            {userData ? (
              <>
                <li>
                  <Link href="#">
                    <a>Профиль</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Выйти</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="#">
                    <a>Войти</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Зарегистрироваться</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
