import React,{useState} from 'react'
import axios from "axios"
import Weatcss from "./style/Weather.module.css"
function Weather({setInfo,setState,info}) {

    const [city, setCity] = useState("");
 
    const handleChange  = async (event) => {
      setCity(event.target.value)
    }

    const handleSubmit = async() => {
        const api = `b7d530ba0a67a49a6103854563d3f8b8`;
         const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

      await axios(baseUrl).then(res => setInfo(res.data));
       setState(true);
    console.log(baseUrl);

    } 
  return (

    <div >
         <section  className={` m-0 p-0 antialiased  text-base  items-center py-32 ${Weatcss.weather_sec}`}>
             <h1 className={`text-3xl font-bold  text-center text-white`}>Weather</h1>

             <form  onSubmit={(e) => { e.preventDefault(); handleSubmit()}} className={`flex justify-center mt-6`}>
  
               <div className='form w-52  '>
                <input onChange={handleChange}  value={city} type="text" placeholder='Search city' className='input h-8 ' />
               </div>
               <div className='button  bg-slate-600 rounded-full'>
                <button type='submit' className='btn mt-1 m-2'>search</button>
               </div>

             </form>
         </section>
    </div>
  )
}

export default Weather