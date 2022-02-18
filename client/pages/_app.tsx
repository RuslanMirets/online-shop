import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { Api } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../redux/actions/userActions';
import { login } from '../redux/actions/authAction';
import { RootState } from '../redux/reducers';
import { GET_INFO } from '../redux/types/profileType';
import { getAPI, postAPI } from '../utils/FetchData';
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
  } catch (err) {
    console.log(err);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
