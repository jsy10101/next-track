import React from "react";

type Users = {
  id: number;
  name: string;
  email: string;
};

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: Users[] = await res.json();

  return (
    <>
      <div>UsersPage</div>
      <hr className="pb-5" />
      <p>Rendered time: {new Date().toLocaleTimeString()}</p>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
