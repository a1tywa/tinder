import React, { useContext, useEffect, useReducer } from "react";
import { usersContext } from "../contexts/UsersContext/UsersContext";
import { usersContextType } from "../contexts/UsersContext/types";
import UserItem from "../UserItem/UserItem";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../utils/consts";

const Users = () => {
  const { users, getUsers, pageTotalCount } = useContext(
    usersContext
  ) as usersContextType;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getUsers();
  }, []);
  // console.log(users);
  // console.log(pageTotalCount);
  return (
    <div>
      {users.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Users;
