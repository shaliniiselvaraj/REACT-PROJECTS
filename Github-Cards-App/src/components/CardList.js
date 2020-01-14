import React from 'react';
import Cards from '../components/Cards';

const CardList =(props)=>(
  
   <div>
       {props.profiles.map(profile => <Cards{...profile}/>)}
   </div>

);
export default CardList;