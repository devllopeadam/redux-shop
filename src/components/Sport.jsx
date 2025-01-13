/* eslint-disable react/prop-types */
const Sport = ({ sport }) => {
  return (
    <div className="bg-white px-4 py-3 rounded-lg shadow-md w-[500px]">
      <p className=" text-[18px] flex items-center gap-3">
        <span className="font-medium">Name: </span> {sport.nomSport}
      </p>
      <p className=" text-[18px] flex items-center gap-3">
        <span className="font-medium">Niveau: </span> {sport.niveau}
      </p>
    </div>
  );
};

export default Sport;
