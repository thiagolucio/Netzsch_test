'use client'
import { useState } from "react";
import Button from "@/app/components/button";
import Link from "next/link";
import SuccessMessage from "../../components/successMsg";
import { useRouter } from "next/navigation";

function NewUser() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formUserData, setFormUserData] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
    first_name: "",
    last_name: "",
    gender: "",
    ip_address: "",
    cep: "",
  });
  const router = useRouter();
  const timer = 2000;

  const handleSuccessMessage = () => {
    setShowSuccessMessage(true);
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("formUserData", formUserData),
        await fetch(process.env.API + "/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formUserData),
        });
      handleSuccessMessage();
      setTimeout(() => {
        router.push(`/users`);
      }, timer);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#EEEEEE]">
      <div className="w-[45%] mx-auto my-auto flex flex-col gap-5 bg-white p-14 rounded-lg">
        <h2>New User</h2>
        <form
          className="flex flex-col space-y-6"
          action="#"
          method="POST"
          onSubmit={createUser}
        >
          <input
            type="text"
            placeholder="username"
            value={formUserData.username}
            onChange={(e) =>
              setFormUserData({ ...formUserData, username: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="email"
            placeholder="email"
            value={formUserData.email}
            onChange={(e) =>
              setFormUserData({ ...formUserData, email: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="password"
            placeholder="password"
            value={formUserData.password}
            onChange={(e) =>
              setFormUserData({ ...formUserData, password: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="text"
            placeholder="avatar URL"
            value={formUserData.avatar}
            onChange={(e) =>
              setFormUserData({ ...formUserData, avatar: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="text"
            placeholder="First Name"
            value={formUserData.first_name}
            onChange={(e) =>
              setFormUserData({ ...formUserData, first_name: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formUserData.last_name}
            onChange={(e) =>
              setFormUserData({ ...formUserData, last_name: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <input
            type="text"
            placeholder="Gender"
            value={formUserData.gender}
            onChange={(e) =>
              setFormUserData({ ...formUserData, gender: e.target.value })
            }
            className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
          />
          <div className="w-full flex gap-4 justify-around">
            <input
                type="text"
                placeholder="Endereço IP"
                value={formUserData.ip_address}
                onChange={(e) =>
                setFormUserData({ ...formUserData, ip_address: e.target.value })
                }
                className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
            />
            <input
                type="text"
                placeholder="CEP"
                value={formUserData.cep}
                onChange={(e) =>
                setFormUserData({ ...formUserData, cep: e.target.value })
                }
                className="rounded-lg p-4 text-sm border border-gray-200 text-slate-500"
            />
          </div>
          <div className="w-full h-[50px] flex justify-start items-stretch gap-5 mx-auto">
            <Button type="submit" variant="primary">
              Create User
            </Button>
            <div className="w-[250px]">
              <Link href="/users" title="Home">
                <Button type="reset" variant="light">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      {showSuccessMessage && (
        <SuccessMessage message="User created successfully" />
      )}
    </div>
  );
}
export default NewUser;
