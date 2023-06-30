import React from 'react'
import  './services.css'

  import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (

     <section id='services'>
      <h5>Mera Safar</h5>
      <h2>My Journey</h2>

         <div className='container services_container'>
          <article className='service'>
            <div className="service_head">
              <h3>JNV WARANGAL</h3>
              {/* <h4>2016-2018</h4> */}
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>

              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>

              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>

              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>
             
            </ul>
          </article>


          <article className='service'>
            <div className="service_head">
              <h3>DAKSHANA BANGALORE</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>

               <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li> 

              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>

              <li>
                <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>
             
            </ul>
           </article>

           <article className='service'>
             <div className="service_head">
             <h3>IIT VARANASI</h3>
           </div>

          <ul className='service_list'>
            <li>
                           <BiCheck className='service_list-icon' />
             <p>This was the turning point in my life</p>
           </li>

              <li>
                 <BiCheck className='service_list-icon' />
                 <p>This was the turning point in my life</p>
               </li>

               <li>
                 <BiCheck className='service_list-icon' />
                 <p>This was the turning point in my life</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                <p>This was the turning point in my life</p>
              </li>
             
             </ul>
           </article>


           </div>      
      </section> 
  )
}

export default Services