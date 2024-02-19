import React from 'react';
import Navbar from './navbar/Navbar';
import Filter from './Filter';
import Pages from './Pages';

function Home() {
   return (
      <>
         <div className="home">
            <div className="row">
               <Pages />
               <Filter/>
            </div>
         </div>
      </>   
   );
}

export default Home;
