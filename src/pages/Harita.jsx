import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import TurkeyMap from "turkey-map-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Harita = () => {
  const [pcity, SetPcity] = useState([]);
  console.log(pcity);
  const navigate = useNavigate();
  const cityClick=(name)=>{
    navigate(`/${name}`);
  }
  return (
    <div>
      <Nav />
      <p className="text-center mt-1 text-lg font-bold text-slate-600">
        {pcity.length ?  `${pcity}` : "Bir Şehir Seçiniz..."}
      </p>
      <TurkeyMap
        viewBox={{ top: 0, left: 130, width: 1050, height: 505 }}
        onClick={({ name }) => cityClick(name)}
        hoverable={true}
        onHover={({ plateNumber, name }) => SetPcity(`${plateNumber}-${name}`)}
      customStyle={{ idleColor: "#7f9595", hoverColor: "#317d85" }}
      />
      <Footer />
    </div>
  );
};

export default Harita;
