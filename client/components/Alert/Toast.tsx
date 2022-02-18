import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ALERT } from '../../redux/types/alertType';

interface IProps {
  body: string | string[];
  severity: any;
}

const Toast = ({ body, severity }: IProps) => {
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch({ type: ALERT, payload: {} });
  };

  return (
    <Snackbar open autoHideDuration={4000} onClose={handleShow}>
      <Alert onClose={handleShow} severity={severity} sx={{ width: '100%' }}>
        {body}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
