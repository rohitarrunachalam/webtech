

import React, { useState } from "react";
import axios from "axios"
const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      fullName: fullName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Registration Successful:", response.data);
      
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
