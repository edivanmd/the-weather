'use client';

import { useState } from 'react';
import Image from "next/image";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import { WeatherImg } from "../components"
import { DateBuilder } from "../components";

const WeekInfo = ({ dataForecast }) => {
    let myDate = " ";
    let myDateBd = " ";

    const data = [
        {
          label: "HTML",
          value: "html",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "React",
          value: "react",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
     
        {
          label: "Vue",
          value: "vue",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're 
          constantly trying to express ourselves and actualize our dreams.`,
        },
     
        {
          label: "Angular",
          value: "angular",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
     
        {
          label: "Svelte",
          value: "svelte",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're 
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];

    const organizeDate = (d) => {
        const date = d.split(' ');
        return `${date[0]}`
    }

    return (
        <>
            <Tabs className="rounded-t-lg" id="custom-animation" value={organizeDate(dataForecast.list[0].dt_txt)}>
                <TabsHeader>
                    {dataForecast.list.map((item, index) => {
                        let dateNow = organizeDate(item.dt_txt);
                        if ( dateNow !== myDate ){
                            myDate = dateNow;
                            return  <Tab key={index} value={organizeDate(item.dt_txt)} className="myTab"> {DateBuilder(new Date(item.dt_txt.split(" ")[0]), 2)} </Tab>
                        }
                    })}
                </TabsHeader>
                <TabsBody className="flex tabsBody"
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 1000 },
                    }}
                >

                    {dataForecast.list.map((item, index) => {
                        let dateNow2 = organizeDate(item.dt_txt);
                        if ( dateNow2 !== myDateBd ){
                            return (
                                <TabPanel className='tabPanelBody p-1 text-center' key={index} value={organizeDate(item.dt_txt)}>
                                    <p className="text-white font-medium text-[11px] md:text-sm pt-3">{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
                                    <WeatherImg weather={item.weather[0].main} />
                                    <p className="flex items-center text-[11px] md:text-sm justify-center"> 
                                        <Image src='/max.png' alt="max-temp" width={10} height={10} className="w-[10px]" />
                                        {(item.main.temp_max).toFixed()}°
                                    </p>
                                    <p className="flex items-center text-[11px] md:text-sm justify-center pt-2">
                                        <Image src='/min.png' alt="min-temp" width={10} height={10} className="w-[10px]" /> 
                                        {(item.main.temp_min).toFixed()}°
                                    </p>
                                </TabPanel>
                            );
                        }
                    })}
                </TabsBody>
            </Tabs>

            {/* <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[1000px] m-auto pt-16">
                {dataForecast.list.map((item, index) => (
                    <li key={index} className="flex flex-col bg-[#1E213A] p-3 text-center items-center gap-5">
                        <p>{item.dt_txt}</p>
                        <WeatherImg weather={item.weather[0].main} />
                        <p>Max: {(item.main.temp_max).toFixed(1)} °c</p>
                        <p>Min: {(item.main.temp_min).toFixed(1)} °c</p>
                    </li>

                ))}
            </ul> */}

        </>
    )
}

export default WeekInfo;