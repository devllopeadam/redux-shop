import { useState } from "react";
import { useSelector } from "react-redux";

const SearchSportif = () => {
  const [searchSport, setSearchSport] = useState("");
  const [filteredAthletes, setFilteredAthletes] = useState([]);
  const { users } = useSelector((state) => state.users);
  const { sports } = useSelector((state) => state.sports);

  const handleSearch = () => {
    const matchedSports = sports.filter((sport) =>
      sport.nomSport.toLowerCase().includes(searchSport.toLowerCase())
    );
    const matchedIds = matchedSports.map((sport) => sport.idSportif);

    const athletes = users.filter((user) =>
      matchedIds.includes(user.idSportif)
    );

    setFilteredAthletes(athletes);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold mb-5">
          Rechercher des Sportfis par Sport
        </h1>
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="Nom du Sport (ex: Football)"
            value={searchSport}
            onChange={(e) => setSearchSport(e.target.value)}
            className="border border-gray-300 rounded-md shadow-md px-3 py-1 w-[300px] outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            Rechercher
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {filteredAthletes.length > 0 ? (
          <div className="flex flex-col gap-4 items-center justify-center">
            {filteredAthletes.map((athlete, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg p-6 mb-4 w-[500px]">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="text-gray-700">
                      <span className="font-semibold">Nom: </span>
                      {athlete.nom}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Prenom: </span>
                      {athlete.prenom}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      <span className="font-semibold">Ville: </span>
                      {athlete.ville}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Email: </span>
                      {athlete.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucun athlète ne pratique ce sport.</p>
        )}
      </div>
    </div>
  );
};

export default SearchSportif;
