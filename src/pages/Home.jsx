import { current } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl font-medium">{`Hello ${currentUser.nom} ${currentUser.prenom}`}</h1>
    </div>
  );
};

export default Home;
