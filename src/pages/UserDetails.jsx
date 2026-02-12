import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));
  console.log(user);

  if (!user) return <div className="p-6">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-300 px-3 py-1 rounded"
      >
        Back
      </button>

      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">{user.name}</h2>

        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
         <p>Company name: {user.company.name}</p>

        <h3 className="mt-4 font-semibold">Address</h3>
        <p>
          {user.address?.street}, {user.address?.suite},{" "}
          {user.address?.city}, {user.address?.zipcode}
        </p>

        <h3 className="mt-4 font-semibold">Geo Location</h3>
        <p>Latitude: {user.address?.geo?.lat}</p>
        <p>Longitude: {user.address?.geo?.lng}</p>
      </div>
    </div>
  );
};

export default UserDetails;
