import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const UserList = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user: any) => (
        <div key={user.id}>
          {user.name} | {user.email} | {user.password} | {user.role[0].description}
        </div>
      ))}
    </div>
  );
};

export default UserList;
