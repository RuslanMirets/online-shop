import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { authSlice } from '../redux/slices/auth';
import { getAPI } from '../utils/FetchData';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { shopToken } = parseCookies(ctx);
    const response = await getAPI('users/profile', shopToken);
    store.dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
