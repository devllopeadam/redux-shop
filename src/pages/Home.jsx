import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || !currentUser.nom || !currentUser.prenom) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl font-medium">{`Hello ${currentUser?.nom} ${currentUser?.prenom}`}</h1>
    </div>
  );
};

export default Home;
