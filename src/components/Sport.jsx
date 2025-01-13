/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSport, deleteSport } from "../store/sports/SportsSlice";

const Sport = ({ sport }) => {
  const [editing, setEditing] = useState(false);
  const [niveau, setNiveau] = useState(sport.niveau);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      updateSport({
        idSportif: sport.idSportif,
        nomSport: sport.nomSport,
        niveau,
      })
    );
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch(
      deleteSport({ idSportif: sport.idSportif, nomSport: sport.nomSport })
    );
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md w-[500px]">
      <div className="flex flex-col gap-2">
        <p className="text-[18px] flex items-center gap-3">
          <span className="font-medium">Name: </span> {sport.nomSport}
        </p>
        <p className="text-[18px] flex items-center gap-3">
          <span className="font-medium">Niveau: </span>
          {editing ? (
            <input
              type="text"
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              className="border border-gray-300 rounded px-2"
            />
          ) : (
            niveau
          )}
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {editing ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-3 py-1 rounded">
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded">
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
        {editing && (
          <button
            onClick={() => {
              setEditing(false);
              setNiveau(sport.niveau);
            }}
            className="bg-gray-500 text-white px-3 py-1 rounded">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default Sport;
