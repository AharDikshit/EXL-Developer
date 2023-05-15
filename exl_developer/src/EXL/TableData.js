import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchData from './SearchData';

const TableData=()=>{

    
  const [data,setData]=-useState(null);
  
  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((response) => {
        setData(response.data);
      })},[])
    
  return(
    <div>
        <SearchData data={data}/>
    </div>
  )

}

export default TableData;