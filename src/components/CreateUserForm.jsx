
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const CreateUserForm = () => {
  const { addUser } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
    },
    company: {
      name: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
      },
      company: {
        name: "",
      },
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-3">Create New User</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Street"
          className="w-full p-2 border rounded"
          value={form.address.street}
          onChange={(e) =>
            setForm({
              ...form,
              address: {
                ...form.address,
                street: e.target.value,
              },
            })
          }
          required
        />

        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border rounded"
          value={form.address.city}
          onChange={(e) =>
            setForm({
              ...form,
              address: {
                ...form.address,
                city: e.target.value,
              },
            })
          }
          required
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full p-2 border rounded"
          value={form.company.name}
          onChange={(e) =>
            setForm({
              ...form,
              company: {
                name: e.target.value,
              },
            })
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;


