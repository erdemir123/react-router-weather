import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import useTurkeyCities from "use-turkey-cities";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { cities, city, setCity } = useTurkeyCities();
  const navigate = useNavigate();

  return (
    <div className="text-lg font-bold h-[100vh]">
      <Nav />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          {
           navigate(`/${city}`) ;
          }

        }}
        className="flex flex-col gap-4 bg-slate-300 h-[84vh] text-center"
      >
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className="w-[60vh] mx-auto mt-20"
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          type="submit"
          style={{ background: "white !important" }}
          className="w-20 mx-auto rounded-md active:scale-[.95] active:text-slate-500 border-2 border-slate-600 py-1 px-2 "
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default List;
