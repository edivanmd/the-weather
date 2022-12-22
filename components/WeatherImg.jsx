'use client';

import Image from "next/image";

const WeatherImg = ({ weather }) => (
    <Image
        src={`/${weather}.png`}
        alt={`${weather}`}
        width={200}
        height={200}
        className="w-[60%] imgWeather" 
    />
);

export default WeatherImg;