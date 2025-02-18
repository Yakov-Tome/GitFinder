import React, { useContext, useEffect } from "react";
import GitContext from "../context/github/GitContext";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user } = useContext(GitContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
