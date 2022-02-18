import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { getAPI } from '../utils/FetchData';
import { parseCookies } from 'nookies';
import { AUTH } from '../redux/types/authType';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { shopToken } = parseCookies(ctx);
    const res = await getAPI('users/profile', shopToken);
    store.dispatch({ type: AUTH, payload: { user: res.data } });
  } catch (error) {
    console.log(error);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
