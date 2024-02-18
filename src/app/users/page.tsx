"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFaceGrimace } from "react-icons/fa6";
import { RiUserAddLine } from "react-icons/ri";
import { FaTrash, FaUserEdit } from "react-icons/fa";

import Loading from "../loading";
import Button from "../components/button";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(process.env.API + "/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await fetch(process.env.API + `/user/${id}`, {
        method: "DELETE",
      });
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = async (id: number) => {
    try {
      await fetch(process.env.API + `/user/${id}`, {
        method: "PATCH",
      });
      getUsers();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-full flex flex-col py-36 bg-customSuccess">
      <Link
        href="/users/new"
        className="text-white p-2 mb-6 xs:mx-32 md:mx-64"
      >
        <Button variant="primary" type="button">
          <RiUserAddLine
            className="text-white text-xl mr-3"
            title="Create New User"
          />{" "}
          Create New user
        </Button>
      </Link>
      <div className="flex gap-5 flex-wrap items-center justify-center w-full h-full">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="xs:w-96 md:w-1/1 lg:w-1/4 h-[450px] rounded-xl bg-white text-gray-500 justify-start p-5 shadow-md"
            >
              <div className="w-full flex flex-col items-center justify-center p-4">
                <img
                  src={user.avatar}
                  alt={`Avatar from ${user.username}`}
                  title={`Avatar from ${user.username}`}
                  className="border border-gray-500 rounded-full bg-customLight"
                  width={100}
                  height={100}
                />
                <div className="text-customSuccess text-xl font-bold">
                  {user.username}
                </div>
                <div className="text-sm">{user.email}</div>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col p-4">
                  <h4 className="font-extrabold text-customSuccess">
                    First Name
                  </h4>
                  {user.first_name}
                </div>
                <div className="flex flex-col p-4">
                  <h4 className="font-extrabold text-customSuccess">
                    Last Name
                  </h4>
                  {user.last_name}
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col p-4">
                  <h4 className="font-extrabold text-customSuccess">
                    ZIP CODE
                  </h4>
                  {user.cep ? (
                    <>{user.cep}</>
                  ) : (
                    <span className="text-red-700 font-bold">Not provided</span>
                  )}
                </div>
                <div className="flex flex-col p-4">
                  <h4 className="font-extrabold text-customSuccess">IP</h4>
                  {user.ip_address}
                </div>
              </div>
              <div className="flex w-full h-[50px] my-3 gap-3 items-center justify-center">
                  <button
                    type="button"
                    className="p-4 rounded-full hover:cursor-pointer transition ease-in-out delay-150 bg-customAlert hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300"
                    onClick={() => deleteUser(user.id)}
                  >
                    <FaTrash className="text-white text-xl" title="Delete User" />
                  </button>

                <Link href={`/users/${user.id}`}>
                  <button
                    type="button"
                    className="p-4 rounded-full transition ease-in-out delay-150 bg-customDefault hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300"
                  >
                    <FaUserEdit
                      className="text-white text-xl"
                      title="Edit User"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex  items-center justify-center text-slate-400 text-6xl">
            <FaFaceGrimace className="text-8xl mr-3" />
            <h1 className="roboto-font-700">No Users found</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
