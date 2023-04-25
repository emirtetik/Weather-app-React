import React from 'react'

 function Info({info,state}) {
  return (
    <div>
       {
         

  state ?      <section>
         <div className='info'>
            <p id='city'>{info.name},{info.sys.country}</p>
            
         </div>
          <div className='temp_value'>
            <p id='temp'>Temp : {info.main.temp}</p>
          </div>
          <p id='wheather'>{info.weather[0].description}</p>
          <div className='feel'>
            <p id='feels_like'>Feelslike :{info.main.feels_like}</p>
          </div>
     </section> : null
      
       }
    </div>
  )
}
export {Info};