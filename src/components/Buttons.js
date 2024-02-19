import React,{ useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { applyFilter } from './store/slices/filterSlice'

export function BtnBox ({main, info}) {
   const [active, setActive] = useState(false);
   const toggle = () => {
      setActive(active => !active);  
   }
   
   let isOpen =  active ? ' show' : '';
      
   let show =  active ? 'bg-blue' : '';
   
   return (
      <div className="alert mb-2.5" onClick={toggle}> 
         <div className={`box select-none cursor-pointer mb-2.5 ${show}`}>{main}</div>
         <div className={`hide${isOpen}`}>{info}</div>
      </div>
   );
}

export function FilterBtn ({main, info, title}) {
   const [show, setShow] = useState(true);
   const showFilters = () => {
      console.log("OPen")
      setShow(show => !show);  
   }
   
   let showFilter =  show ? '' : 'hide';
   
   return (
      <div> 
         <button className="text-white flex items-center gap-1 text-xs my-1.5 select-none" onClick={showFilters}>
            {showFilter ? <img src="../images/right-arrow.svg" alt="right-arrow" /> : <img src="../images/d-arrow.svg" alt="down-arrow" />}
            {title}
         </button>
            <div className={`${showFilter}`}>{main}</div>
      </div>
   );
}

export function Button ({icon, title}) {
   
   const filters = useSelector((state) => state.filters);
   
   const dispatch = useDispatch();
   
   const [chose, setChose] = useState(false);
   
   const [filter, setFilter] = useState('');
   
   const isChose = ({title}) => {
      setChose(chose => !chose);  
      dispatch(applyFilter({title}));
   }
   
   let activeBtn =  chose ? 'active' : '';
   
   return (
         <button className={`flex items-center text-xs gap-1 py-px px-1 my-1 ${activeBtn}`} disabled={activeBtn} onClick={() => isChose({title})}>
            {icon}
            {title}
         </button>
   );
}