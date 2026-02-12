

import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import CreateUserForm from "../components/CreateUserForm";

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");


  const filteredUsers =
    users?.filter((user) => {
      const searchText = search.toLowerCase();

      const name = user?.name?.toLowerCase() || "";
      const email = user?.email?.toLowerCase() || "";
      const phone = user?.phone?.toLowerCase() || "";

      
      let city = "";

      if (typeof user?.address === "object") {
        city = user?.address?.city?.toLowerCase() || "";
      } else if (typeof user?.address === "string") {
        city = user?.address?.toLowerCase() || "";
      }

      return (
        name.includes(searchText) ||
        email.includes(searchText) ||
        phone.includes(searchText) ||
        city.includes(searchText)
      );
    }) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Dashboard
      </h1>

     
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name, email, phone or city..."
          className="w-full max-w-md p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

     
      <CreateUserForm />

     
      <div className="grid gap-4 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No users found
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
