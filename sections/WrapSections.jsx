'use client';


import { useState } from 'react';
import { MainTemperature, SecondTemperature } from "../sections";
import { Navbar } from "../components"

const WrapSections = () => {

    const [nav, setNav] = useState(true);
    const [dataToday, setDataToday] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);

    const handleNavbar = () => { setNav(!nav); };
    const setPassingData = (dataToday, dataForecast) => { setDataToday(dataToday); setDataForecast(dataForecast);}

    return (
        <>
            <Navbar handleNavbar={handleNavbar} nav={nav} setPassingData={setPassingData} />
            <MainTemperature handleNavbar={handleNavbar} dataToday={dataToday} />
            <SecondTemperature dataToday={dataToday} dataForecast={dataForecast} />
        </>
    );
}

export default WrapSections