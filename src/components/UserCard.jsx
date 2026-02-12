import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
    console.log(user);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer transition"
    >
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">Phone: {user.phone}</p>
     
      <p className="text-sm text-gray-600">Company : {user.company.name }</p>
      
    </div>
  );
};

export default UserCard;
