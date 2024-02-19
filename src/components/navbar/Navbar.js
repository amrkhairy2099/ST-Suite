import React from 'react';
import { RangIcon, TraningIcon, SystemIcon, FolderIcon, TradingIcon} from '../Icons';
import { Link } from 'react-router-dom';

function Navbar() {
   
   return (
      <>
         <div className="navbar">
            <div className="logo flex items-center">
               <img src="./images/logo-1.png" alt="Logo" />
            </div>
            <ul className="flex">
               <li>
                  <Link to="/alerts" className="flex items-center gap-2 text-white">
                     <span><RangIcon/></span>
                     Alerts
                  </Link>
               </li>
               <li>
                  <Link to="/traning" className="flex items-center gap-2 text-white">
                     <span><TraningIcon/></span>
                     Traning
                  </Link>
               </li>
               <li>
                  <Link to="/automation" className="flex items-center gap-2 text-white">
                     <span><SystemIcon/></span>
                     Automation
                  </Link>
               </li>
               <li>
                  <Link to="/portoflio" className="flex items-center gap-2 text-white active">
                     <span><FolderIcon/></span>
                     Portoflio
                  </Link>
               </li>
               <li>
                  <Link to="/trading" className="flex items-center gap-2 text-white active">
                     <span><TradingIcon/></span>
                     Trading
                  </Link>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Navbar;
