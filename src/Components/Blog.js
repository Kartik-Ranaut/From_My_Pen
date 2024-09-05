import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Blog() {
  const [datann,setdata]=useState();
  const call= async()=>{
    let data= await fetch('https://blog-app-api-804s.onrender.com/api/posts');
    let datan= await data.json();
    setdata(datan.data);
    console.log(datan.data);
};

useEffect(()=>{
    call();
},[])
  return (
  <div className='blogsec'>
    {
        datann?.map((element)=>{
        return <Card {...element} ></Card>
      })
    }
    </div>
  )
}
