'use client';

import { WeatherImg } from "../components"
import { DateBuilder } from "../components";

const MainTemperature = ({ handleNavbar, dataToday }) => {
    return( 
        <div className="flex flex-col gap-10 items-center p-5 md:p-10 w-full md:w-[35%]">
            <button onClick={handleNavbar} type="button" className="bg-[#100E1D] p-3 shadow-lg w-fit hover:bg-white hover:text-[#100E1D] ease-linear duration-300 rounded-sm">Search for places</button>

            {dataToday && (
                <>
                    <p className="text-white text-4xl">{dataToday.name + " - " + dataToday.sys.country}</p>
                    <WeatherImg weather={dataToday.weather[0].main} />
                    <h2 className="text-8xl font-extrabold fon">{(dataToday.main.temp).toFixed(1)}<span className="text-5xl text-second-white">°c</span></h2>
                    <p className="text-second-white text-4xl">{dataToday.weather[0].main}</p>
                    <p className="text-second-white">{DateBuilder(new Date(), 1)}</p>
                </>
            )}
        </div>
    )
};

export default MainTemperature