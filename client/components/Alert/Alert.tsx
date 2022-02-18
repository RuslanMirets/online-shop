import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Loading from './Loading';
import Toast from './Toast';

const Alert = () => {
  const { alert } = useSelector((state: RootState) => state);

  return (
    <>
      {alert.loading && <Loading />}{' '}
      {alert.success && <Toast severity="success" body={alert.success} />}
      {alert.errors && <Toast severity="error" body={alert.errors} />}
    </>
  );
};

export default Alert;
