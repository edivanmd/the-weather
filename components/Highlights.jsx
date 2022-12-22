'use client';

const Highlights = ({ dataToday }) => {
    const items = [    
      { name:"Wind Status", data: dataToday.wind.speed + " m/s" },
      { name:"Humidity", data: dataToday.main.humidity + " %" },
      { name:"Visibility", data: dataToday.visibility + " km" },
      { name:"Pressure", data: dataToday.main.pressure + " hPa" },
    ];

    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col bg-[#1E213A] text-center items-center gap-5 p-7">
            <p className="text-xl">{item.name}</p>
            <p className="text-5xl tracking-tighter text-second-white">{item.data}</p>
          </li>
         ))}
      </ul>
    );
}


export default Highlights;