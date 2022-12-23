'use client';

import { useState } from 'react';
import axios from 'axios';
import { Alert, Input, Button } from "@material-tailwind/react";


const Navbar = ({ handleNavbar, nav, setPassingData }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false); //error: city not found
    const [input, setInput] = useState("");
    const [dataToday, setDataToday] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);
    const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const getData = async () => {
        try {
            setIsLoading(true)
            const responseToday = await axios.get(urlToday);
            const responseForecast = await axios.get(urlForecast);
            
            setDataToday(responseToday.data);
            setDataForecast(responseForecast.data);

            console.log(responseToday.data);
            console.log(responseForecast.data);

            setPassingData(responseToday.data, responseForecast.data);
            setInput('');
            setIsLoading(false)
            handleNavbar();
        } catch (error) {
            setShow(true); //error Alert
        }
    }

    const submitHandler = (e) => {
        e.preventDefault(e);
        if(input === '') {
            setShow(true); //error Alert
            return
        }
        getData();
    }

    return ( //md:w-[35%]
        <div className={`fixed flex flex-col gap-10 inset-0 w-full h-screen bg-opacity-90 bg-black ease-in duration-300 p-10 z-50
            ${nav
            ? 'left-[0]'
            : 'left-[-100%]'
          }`
        }>
            <div className='flex w-[80%] m-auto'>

                <form className="flex flex-col justify-between items-center gap-4 m-auto w-full">
                    
                    {dataToday && (
                        <button type="button" onClick={handleNavbar} className="self-end w-10 h-10 border-2 rounded-full transition ease-in-out hover:scale-110  duration-300">x</button>
                        )}
                
                    <Alert className="my-10" color="red" show={show} dismissible={{ onClose: () => setShow(false), }} >
                        Sorry, that city was not found! <br/> Please, try again.
                    </Alert>

                    {/* <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Search location"
                        required
                        className="px-3 text-black h-[50px] w-full"
                    /> */}
                    
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        variant="standard" 
                        label="Search a city"
                        className="inputCity"
                        />
                    <Button type="submit" ripple={true} onClick={submitHandler} color="indigo" disabled={isLoading}>
                        {isLoading
                            ?   <div className="text-center flex gap-2 items-center">
                                    <div role="status">
                                        <svg className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    Sarching
                                </div>
                            : "Search"
                        }
                        </Button>
                    {/* <button type="submit" onClick={submitHandler} className="self-end bg-gray-500 p-3 shadow-lg hover:scale-110 ease-linear duration-100 rounded-sm w-1/4 w-min-[50px]">Search</button> */}
                </form>
            
            </div>
        </div>
    )
}

export default Navbar