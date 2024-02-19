import React from 'react';

function Search() {
   return (
      <>
         <div className="search">
            <div className="container">
               <section className="flex items-center justify-around">
                  <h1 className="text-white">ALERTS</h1>
                  <div className="search-box flex text-xs py-1 px-2">
                     <input type="text" placeholder="Search By..." autocomplate="off" />
                     <img src="../images/search-icon.svg" alt="Search Icon" />
                  </div>
                  <div className="signer">
                     <span className="">1</span>
                     <img src="../images/ring.png" alt="" />
                  </div>
               </section>
            </div>
         </div>
      </>   
   );
}

export default Search;
