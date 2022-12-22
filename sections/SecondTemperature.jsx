'use client';

import { WeekInfo, Highlights } from "../components";

const SecondTemperature = ({ dataToday, dataForecast }) => {
  return (
    <div className="bg-[#100E1D] w-full md:w-[65%] p-10">

      <div className="max-w-[700px] m-auto">
        <h2 className="text-2xl">Today's highlights</h2>
        {dataToday && <Highlights dataToday={dataToday} />}
      </div>

      <h2 className="text-2xl pt-10 pb-5">Forecast</h2>
      {dataToday && <WeekInfo dataForecast={dataForecast} />}
    </div>
  )
}

export default SecondTemperature