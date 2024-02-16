"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiEdit2Fill, RiDeleteBack2Fill, RiUserAddLine } from "react-icons/ri";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaFaceGrimace } from "react-icons/fa6";
import Loading from "../loading";

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
      await fetch(process.env.API + `/delete_user/${id}`, {
        method: "DELETE",
      });
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex gap-5 flex-wrap items-center justify-center w-full h-full py-36">
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="md:w-1/1 lg:w-1/4 h-[600px] rounded-lg bg-customSuccess text-white justify-start"
          >
            <img
              src={user.avatar}
              alt="Avatar"
              className="border border-gray-500 rounded-full bg-white"
              width={80}
              height={80}
            />
            <div className="p-4 rounded-lg">{user.id}</div>
            <div className="p-4 rounded-lg">{user.username}</div>
            <div className="p-4 rounded-lg">{user.first_name}</div>
            <div className="p-4 rounded-lg">{user.last_name}</div>
            <div className="p-4 rounded-lg">{user.gender}</div>
            <div className="p-4 rounded-lg">{user.email}</div>
            <div className="p-4 rounded-lg">{user.cep}</div>
            <div className="p-4 rounded-lg">{user.ip_address}</div>
          </div>
        ))
      ) : (
        <div className="w-full flex  items-center justify-center text-slate-400 text-6xl">
          <FaFaceGrimace className="text-8xl mr-3" />
          <h1 className="roboto-font-700">No Users found</h1>
        </div>
      )}
    </div>
  );
}

export default Users;
