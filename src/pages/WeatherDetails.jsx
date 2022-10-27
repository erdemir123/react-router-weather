import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Loading from "../assets/loading.gif";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weathers, setWeathers] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f52bffe7adaa52051375083cf96266b4&units=metric&lang=tr`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          alert("something wrong");
        }
        return res.json();
      })
      .then((data) => {
        const { weather, name, main, wind, sys } = data;
        console.log(data)
        const { icon, description } = weather[0];
        return setWeathers({ icon, description, name, wind, sys,main });
      })
      .catch((err) => console.log(err));
    setLoad(!load);
  }, [city]);
  
if(!weathers.icon){
return <img src={Loading} alt="" />
}
  return (
    <div className="bg-slate-300 h-[100vh] relative">
      <Nav />
      <p className="bg-slate-600 py-2 text-center text-lg  font-bold text-sky-100 shadow-xl shadow-slate-400">
        {city} İli Hava Durumu Bilgileri
      </p>
      <div className=" bg-slate-600 w-[450px] text-center mx-auto mt-5 h-[400px] shadow-lg rounded-lg  shadow-slate-400">
         <p className="text-left font-bold text-md ml-4 pt-5">{weathers.sys.country}</p>
        <p className="text-left font-bold text-2xl ml-4 pt-5  text-slate-300">{weathers.name}</p>
        <div className="font-bold text-4xl mt-2">
          {Math.trunc(weathers.main?.temp)} °C
        </div>
        <div className='font-bold text-2xl text-slate-300'>{weathers.description?.toUpperCase()}</div>
        <div className="font-bold text-2xl">{weathers.wind?.speed} KM/H</div>
        <div className="font-bold text-2xl text-slate-300">{weathers.main?.humidity} %</div>
        <img src={`http://openweathermap.org/img/wn/${weathers.icon}.png`} alt="" className="mx-auto mt-2 w-[150px]" />
      </div>
      <Footer />
    </div>
  );
};

export default WeatherDetails;
