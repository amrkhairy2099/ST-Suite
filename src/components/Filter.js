import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { filterBtns, otherFilter } from './Data' 
import { FilterBtn, Button } from './Buttons'
import { clearFilters } from './store/slices/filterSlice';

function Filter() {   
   
   const filters = useSelector((state) => state.filters);
   const dispatch = useDispatch();
   
   const clear = (title) => {
      dispatch(clearFilters({title}))
      console.log("clear");
   }
   
   return (
      <>
         <div className="filter">
            <h1 className="text-white text-center">Filters</h1>
            <div className="filter-chose">
               <div className="flex items-center justify-between">
                  <span className="text-xs">Filters Applied</span>
                  <button className="text-white text-xs mx-1">Clear All</button>
               </div>
               <div className="chosen flex flex-wrap gap-1">
                  {filters.map((item, index) => (
                     <div key={index}>
                        <button className="text-black text-xs p-0.5" onClick={() => clear(item.title)}>{item.title} X</button>
                     </div>
                  ))}
               </div>
            </div>
            <div className="stock">
               <h3 className="text-white text-xs my-1">Stock</h3>
               <div className="search-box flex text-xs py-1 px-2">
                  <input type="text" placeholder="$ TICKER" autocomplate="off" />
                  <img src="../images/search-icon.svg" alt="Search Icon" />
               </div>
               <div className="industry my-2.5">
                  <FilterBtn title="Industry"
                     main={
                        <div>
                           <div className="one float-left ml-2.5">
                              <ul>
                                 {filterBtns.slice(0,6).map((item, index) => (
                                    <li key={index}>
                                       <Button icon={<img src={item.icon} alt={item.name} />} title={item.name}/>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="tow float-right">
                              <ul>
                                 {filterBtns.slice(6).map((item, index) => (
                                    <li key={index}>
                                       <Button icon={<img src={item.icon} alt={item.name} />} title={item.name}/>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     }
                  />
                  <div className="clear-both"></div>
               </div>
               <div className="market-risk my-2.5">
                  <div className="one float-left">
                     <FilterBtn title="Market Cap"
                        main={
                           <div>
                              <ul className="ml-2.5">
                                 {otherFilter.slice(0,3).map((item, index) => (
                                    <li key={index} className="flex items-center text-xs gap-1 my-1.5">
                                       <label className="radio"> 
                                          <input type="checkbox" id={item.name}/>
                                          <span></span>
                                       </label>
                                       <label htmlFor={item.name} className="select-none">{item.title}</label>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        }
                     />
                  </div>
                  <div className="tow float-right">
                     <FilterBtn title="Risk Level"
                        main={
                           <div>
                              <ul className="ml-2.5">
                                 {otherFilter.slice(3).map((item, index) => (
                                    <li key={index} className="flex items-center text-xs gap-1 my-1.5">
                                       <label className="radio"> 
                                          <input type="checkbox" id={item.name}/>
                                          <span></span>
                                       </label>
                                       <label htmlFor={item.name} className="select-none">{item.title}</label>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        }
                     />
                  </div>
                  <div className="clear-both"></div>
               </div>
               <div className="strategy">
                  <div className="float-left text-center">
                     <h4 className="text-white text-xs my-1.5">Strategy</h4>
                     <span className="text-xs">Big Option Buys</span>
                     <button className="btn-1 block text-xs px-3.5 py-px">Merger Arbitrage</button>
                     <span className="text-xs">Short Reports</span>
                  </div>
                  <div className="float-right text-center">
                     <h4 className="text-white text-xs my-1.5">Asset</h4>
                     <span className="text-xs">Stocks</span>
                     <button className="btn-1 block text-xs px-3.5 py-px">Options</button>
                     <span className="text-xs">Futures</span>
                  </div>
                  <div className="clear-both"></div>
               </div>
            </div>
            <button className="btn-1 block mt-5 mx-auto px-11 py-0.5">Apply</button>
         </div>
      </>
   );
}

export default Filter