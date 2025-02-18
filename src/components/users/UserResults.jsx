import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GitContext from "../../context/github/GitContext";

function UserResults() {
  const { loading, users } = useContext(GitContext);

  if (!loading) {
    return (
      <div className="grid grid-cls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
