import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../store/users/UsersSlice";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );
    if (user) {
      dispatch(setCurrentUser(user));
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="bg-whiet p-4 rounded-lg shadow-md w-[500px] bg-white flex flex-col gap-5 mt-10">
      <h1 className="text-xl font-medium">Login</h1>
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
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md px-3 py-2">
            Login
          </button>
          <Link
            className="text-indigo-500 font-medium"
            to={"/register"}>
            {"S'inscrire"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
