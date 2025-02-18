import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_GITHUB_URL}/users`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.login}</h3>
          </div>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
