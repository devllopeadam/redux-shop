import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sport from "../components/Sport";
const Sports = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { sports } = useSelector((state) => state.sports);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser || !currentUser.nom || !currentUser.prenom) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col gap-5 items-center">
      {sports
        .filter((x) => x.idSportif === currentUser.idSportif)
        .map((sport, i) => {
          return (
            <Sport
              key={i}
              sport={sport}
            />
          );
        })}
    </div>
  );
};

export default Sports;
