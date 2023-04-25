import React,{useState} from 'react'
import axios from "axios"
function Weather({setInfo,setState,info}) {

    const [city, setCity] = useState("");
 
 
    const handleChange = async() => {
        const api = `b7d530ba0a67a49a6103854563d3f8b8`;
         const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

      await axios(baseUrl).then(res => setInfo(res.data));
       setState(true);
    } 
  return (

    <div>
         <section className=''>
             <h1>Weather</h1>

             <form action="" onSubmit={(e) => { e.preventDefault(); handleChange()}}>
  
               <div className='form'>
                <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='Search city' className='input' />
               </div>
               <div className='button'>
                <button type='submit' className='btn'>search</button>
               </div>

             </form>
         </section>
    </div>
  )
}

export default Weather