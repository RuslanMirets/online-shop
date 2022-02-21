import React, { useEffect } from 'react';
import { getAllUsers } from '../redux/actions/user';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const UserList = () => {
  const users = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="user-list">
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email} | {user.password} | {user.role[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
