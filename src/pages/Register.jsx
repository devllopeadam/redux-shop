import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../store/users/UsersSlice";

const Register = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(addUser(data));
      navigate("/login");
    }
  };

  return (
    <div className="bg-whiet p-4 rounded-lg shadow-md w-[500px] bg-white flex flex-col gap-5 mt-10">
      <h1 className="text-xl font-medium">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md px-3 py-2">
            Register
          </button>
          <Link
            className="text-indigo-500 font-medium"
            to={"/login"}>
            {"Se connecter"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
