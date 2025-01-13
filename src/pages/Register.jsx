import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../store/users/UsersSlice";

const Register = () => {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    ville: "Tanger",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const validate = () => {
    const errors = {};
    if (!data.nom) {
      errors.nom = "Nom is required";
    }
    if (!data.prenom) {
      errors.prenom = "Prénom is required";
    }
    if (!data.ville) {
      errors.ville = "Ville is required";
    }
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
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const lastId = users[users.length - 1].idSportif;
      dispatch(addUser({ idSportif: lastId + 1, ...data }));
      navigate("/login");
    }
  };

  return (
    <div className="bg-whiet p-4 rounded-lg shadow-md w-[500px] bg-white flex flex-col gap-5">
      <h1 className="text-xl font-medium">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="email"
              className="block">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.nom}
              onChange={(e) => setData({ ...data, nom: e.target.value })}
            />
            {errors.nom && (
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.nom}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="email"
              className="block">
              Prenom
            </label>
            <input
              type="text"
              id="prenom"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.prenom}
              onChange={(e) => setData({ ...data, prenom: e.target.value })}
            />
            {errors.prenom && (
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.prenom}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
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
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="email"
              className="block">
              Ville
            </label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.ville}
              onChange={(e) => setData({ ...data, ville: e.target.value })}>
              <option value="Tanger">Tanger</option>
              <option value="Rabat">Rabat</option>
              <option value="Larache">Larache</option>
              <option value="Tetouan">Tetouan</option>
            </select>
            {errors.ville && (
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.ville}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
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
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.password}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="confirmPassword"
              className="block">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm absolute right-0 top-0">
                {errors.confirmPassword}
              </p>
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
