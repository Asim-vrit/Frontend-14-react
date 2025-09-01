import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
const PAGE_ROUTE = "/users";
function Users() {
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

  const { data: usersData, customFetch: fetchUsers } = useFetch({
    url: PAGE_ROUTE,
    initialData: [],
    fetchOnMount: true,
  });
  const { customFetch: postUser } = useFetch({
    url: PAGE_ROUTE,
    fetchOptions: { method: "POST" },
    onSuccess: () => {
      resetFields();
      fetchUsers();
    },
  });
  const { customFetch: deleteUser } = useFetch({
    url: PAGE_ROUTE,
    fetchOptions: { method: "DELETE" },
    onSuccess: (deletedUser) => {
      resetFields();
      fetchUsers();
      alert(`User ${deletedUser.name.firstname} deleted Successfully`);
    },
  });
  const { customFetch: updateUser } = useFetch({
    url: PAGE_ROUTE,
    fetchOptions: { method: "PUT" },
    onSuccess: () => {
      resetFields();
      fetchUsers();
    },
  });

  function onSubmit() {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    postUser({ body: data });
  }
  function onUpdate(userData) {
    setEditId(userData.id);
    setUsername(userData.username);
    setPassword(userData.password);
    setEmail(userData.email);
  }

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
            onClick={() => {
              updateUser({
                body: { username: username, email: email, password: password },
                urlPart: editId,
              });
            }}
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
                    onClick={() => deleteUser({ urlPart: user.id })}
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
