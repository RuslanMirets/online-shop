import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const isAuth = false;

  return (
    <header className="header mb-40">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Online-Shop</a>
          </Link>
          <div className="collapse navbar-collapse d-flex justify-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
