import React, { useEffect, useState } from "react";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);

  function resetFields() {
    setUsername("");
    setEmail("");
    setPassword("");
    setEditId(null);
  }
  async function fetchUsers() {
    try {
      const raw = await fetch("https://fakestoreapi.com/users");
      if (!raw.ok) {
        const error = await raw.text();
        throw new Error(error);
      }
      const res = await raw.json();
      setUsersData(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function postUser(newUser) {
    try {
      const raw = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "content-type": "Application/JSON" },
      });
      if (!raw.ok) {
        const error = await raw.text();
        throw new Error(error);
      }
      await raw.json();
      fetchUsers();
      resetFields();
      alert("User created Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(userId) {
    try {
      const raw = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: "DELETE",
      });
      if (!raw.ok) {
        const error = await raw.text();
        throw new Error(error);
      }
      const deletedUser = await raw.json();
      fetchUsers();
      alert(`User ${deletedUser.name.firstname} deleted Successfully`);
    } catch (error) {
      console.log(error);
    }
  }
  async function updateUser() {
    console.log(editId, username, email, password);
    const updatedUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const raw = await fetch(`https://fakestoreapi.com/users/${editId}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: { "content-type": "Application/JSON" },
      });
      if (!raw.ok) {
        const error = await raw.text();
        throw new Error(error);
      }
      await raw.json();
      fetchUsers();
      resetFields();
      alert("User updated Successfully");
    } catch (error) {
      console.log(error);
    }
  }
  function onSubmit() {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    postUser(data);
  }
  function onUpdate(userData) {
    setEditId(userData.id);
    setUsername(userData.username);
    setPassword(userData.password);
    setEmail(userData.email);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(editId);
  return (
    <div>
      <div className="w-fit space-y-2 my-4">
        <div className="grid grid-cols-2 ">
          <label htmlFor="">Username</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="border rounded-xl border-gray-600 px-2 py-1"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded-xl border-gray-600 px-2 py-1"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2">
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded-xl border-gray-600 px-2 py-1"
            type="text"
          />
        </div>
        {!editId && (
          <button
            onClick={onSubmit}
            className="border rounded-xl px-2 py-2 hover:cursor-pointer"
          >
            Submit
          </button>
        )}
        {editId && (
          <button
            onClick={updateUser}
            className="border rounded-xl px-2 py-2 hover:cursor-pointer"
          >
            Update
          </button>
        )}
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                key={index}
              >
                <td className="px-6 py-4">{user?.id}</td>
                <td className="px-6 py-4">
                  {user.name?.firstname} {user.name?.lastname}
                </td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.phone}</td>
                <td className="px-6 py-4">
                  <div>{user.address.city}</div>
                  <div className="text-xs text-gray-600">
                    {user.address.street}, {user?.address?.number}
                  </div>
                  <div className="text-xs text-gray-600">
                    {user.address.zipcode}
                  </div>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => {
                      onUpdate(user);
                    }}
                    className="border px-2 py-1 rounded-xl hover:cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="border px-2 py-1 rounded-xl hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
