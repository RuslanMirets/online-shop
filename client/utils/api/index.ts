import axios from 'axios';
import { NextPageContext, GetServerSidePropsContext } from 'next';
import Cookies, { parseCookies } from 'nookies';
import { UserApi } from './user';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
};

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.shopToken;

  const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const apis = {
    user: UserApi,
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiReturnType);

  return result;
};