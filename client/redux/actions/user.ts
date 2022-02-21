import { userSlice } from './../slices/user';
import { getAPI } from './../../utils/FetchData';
import { AppDispatch } from '../store';
import { parseCookies } from 'nookies';



// export const profile = () => async (dispatch: AppDispatch) => {
//   try {
//     const { shopToken } = parseCookies();
//     const response = await getAPI('users/profile', shopToken);
//     dispatch(userSlice.actions.profile(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };
