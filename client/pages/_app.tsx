import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { getAPI } from '../utils/FetchData';
import { authSlice } from '../redux/reducers/AuthSlice';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { shopToken } = parseCookies(ctx);
    const response = await getAPI('users/profile', shopToken);
    store.dispatch(authSlice.actions.login(response.data));
  } catch (err) {
    console.log(err);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
