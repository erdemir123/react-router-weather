import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Loading from "../assets/loading.gif";

const Home = () => {
  const navigate = useNavigate();
  const [weat, setWeat] = useState("");
  const [lead, setLead] = useState(true);
  const city = "ankara";
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f52bffe7adaa52051375083cf96266b4&units=metric&lang=tr`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          alert("something wrong");
        }
        return res.json();
      })
      .then((data) => setWeat(data))
      .catch((err) => console.log(err));
    setLead(!lead);
    console.log(lead);
  }, []);

  if (!weat) {
    return <img src={Loading} alt="" />;
  }
  return (
    <div className="bg-slate-300 h-[100vh]">
      <Nav />
      <p className="text-center mt-5 text-md font-bold text-slate-600">
        HOŞGELDİNİZ
      </p>
      <p className="text-center mt-1 text-md font-bold text-slate-600">
        Diğer illerin hava durumu için lütfen tıklayınız.
      </p>
      <div className="flex justify-center mt-3 gap-2">
        <button
          className="bg-slate-400 py-1 px-2 text-slate-200 rounded-md active:bg-slate-500 active:text-slate-900 duration-200"
          onClick={() => navigate("/harita")}
        >
          Türkiye Haritası
        </button>
        <button
          className="bg-slate-400 py-1 px-2 text-slate-200 rounded-md active:bg-slate-500 active:text-slate-900 duration-200"
          onClick={() => navigate("/list")}
        >
          Türkiye İller Listesi
        </button>
      </div>
      <div>
        <div className=" bg-slate-600 w-[450px] text-center mx-auto mt-5 h-[400px] shadow-lg rounded-lg  shadow-slate-400">
          <p className="text-left font-bold text-md ml-4 pt-5">
            {weat?.sys?.country}
          </p>
          <p className="text-left font-bold text-2xl ml-4 pt-5  text-slate-300">{weat.name}</p>

          <div className="font-bold text-4xl mt-2 ">
            {Math.trunc(weat.main?.temp)}°C
          </div>
          <div className="font-bold text-2xl text-slate-300">{weat?.weather[0].description.toUpperCase()}</div>
          <div className="font-bold text-2xl text-slate-300">{weat.wind?.speed} KM/H</div>
          <div className="font-bold text-2xl text-slate-300">{weat.main?.humidity} %</div>
          <img className="mx-auto mt-2 w-[150px]"
            src={`http://openweathermap.org/img/wn/${weat.weather[0]?.icon}.png`}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
