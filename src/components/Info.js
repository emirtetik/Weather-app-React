import React from 'react'
import infocss from "./style/Info.module.css"
 function Info({info,state}) {
  return (
    <div className=''>
       {
         

  state ?      <section className={`grid justify-center  py-64 text-white  ${infocss.info_sec}`}>
         <div className='info grid gap-4'>
            <p id='city'>{info.name},{info.sys.country}</p>
            
         <p id='wheather'>{info.weather[0].description}</p>
          <div className='temp_value'>
            <p id='temp'>Temp : {info.main.temp}</p>
          </div>
          <div className='feel'>
            <p id='feels_like'>Feelslike :{info.main.feels_like}</p>
          </div>
          <div className=' '>
          <p id='temp'>Temp : {info.main.temp_max}</p>
          <p id='temp'>Temp : {info.main.temp_min}</p>
          </div>
         </div>

     </section> : null
      
       }
    </div>
  )
}
export {Info};