import React from 'react';
import Search from './Search';
import Alerts from './navbar/Alerts';
import Traning from './navbar/Traning';
import Automation from './navbar/Automation';
import Portoflio from './navbar/Portoflio';
import Trading from './navbar/Trading';
import { Routes, Route } from 'react-router-dom';

function Pages() {
   return (
      <>
         <div className="pages">
            <Search/>
            <Routes>
               <Route path="alerts" element={<Alerts />} />
               <Route path="traning" element={<Traning />} />
               <Route path="automation" element={<Automation />} />
               <Route path="portoflio" element={<Portoflio />} />
               <Route path="trading" element={<Trading />} />
            </Routes>
         </div>
      </>   
   );
}

export default Pages;
