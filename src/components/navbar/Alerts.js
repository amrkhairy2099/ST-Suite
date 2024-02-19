import React,{ useState } from 'react';
import { Link } from "react-router-dom"
import { alerts } from '../Data'
import { BtnBox } from '../Buttons'


function Alerts() {
   
   return (
      <>
         <div className="alerts px-3">
            <div className="container">
            {alerts.map((item, index) => {
               const {name, num, precent, type, icon, fileIcon, diagram, dolar} = item;
               return (
                  <div key={index}>
                     <BtnBox 
                        main={
                           <div className="holder grid grid-cols-4 items-center text-white text-xs">
                              <div>
                                 <img src={icon} alt="" />
                                 <h6>{name}</h6>
                              </div>
                              
                              <div>
                                 <img src={fileIcon} alt="fileIcon" />
                                 <h6>{num}</h6>
                              </div>
                              
                              <div>
                                 <img src={diagram} alt="" />
                                 <h6>{precent}</h6>
                              </div>
                              
                              <div>
                                 <img src={dolar} alt="" />
                                 <h6>{type}</h6>
                              </div>
                           </div>
                        }
                        info={
                           <div className="alert-info text-gray-300 text-xs py-3 px-6 leading-4">
                              <p>
                                 <b className="text-white">{name}</b> just announced an acquisition of  
                                 <b className="text-white"> $NFLX </b> at <b className="text-white">$200</b> B. 
                              </p>
                              <p className="mt-2">
                                 This is an <Link className="text-sky-700" t0="/alerts">arbitrage opportunity</Link>, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is % and therefore the recommended play is <Link className="text-sky-700" to="/alerts">long/short</Link> $ABC
                              </p>
                           </div>
                        }
                     />
                  </div>
               );
            })}
            </div>
         </div>
      </>
   );
}

export default Alerts;
