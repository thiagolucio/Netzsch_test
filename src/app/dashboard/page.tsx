"use client";

import GenderChart from "../components/genderChart";
import { useEffect, useState } from "react";

function Dashboard() {
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

  return (
    <main className="flex min-h-screen flex-col py-40 px-12">
      <div className="w-full flex justify-center p-4">
        <GenderChart gender={users} />
      </div>
    </main>
  );
}

export default Dashboard;
