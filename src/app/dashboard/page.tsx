"use client";

import Button from "../components/button";
import GenderChart from "../components/genderChart";
import { useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import Logo from "../components/logo";

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
      <div className="w-full flex flex-col m-3">
        <h3 className="text-3xl text-slate-800">
          Components - <small>Reusabled</small>{" "}
        </h3>
        <div className="w-full flex items-center justify-around gap-4">
          <Button variant="primary" type="submit">
            Button Primary
          </Button>
          <Button variant="default" type="submit">
            <FaCheckCircle className="text-xl mr-1" /> Button Default with Icon
          </Button>
          <Button variant="success" type="submit">
            Button Success
          </Button>
          <Button variant="alert" type="submit">
            Button Alert
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col m-3">
        <div className="w-full flex items-center justify-around gap-4">
          <div>
            <h4>Default Logo</h4>
            <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout sloganLayout />
          </div>
          <div>
            <h4>Horizontal Logo</h4>
            <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout={false} sloganLayout />
          </div>
          <div>
            <h4>Just Logo</h4>
            <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout sloganLayout={false} />
          </div>
        </div>
        <div className="w-full my-12 justify-center flex font-bold">
          <h2>Please. Take a look at documentation WIKKI and README to know more...</h2>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
