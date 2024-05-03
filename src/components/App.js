// create your App component here

import React, { useState } from "react";
import { useEffect } from "react";



function App (){
    const [dogpic,setDogPic] =useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((data)=>{
            setDogPic(data.message)
        })
    },[])
    if(!dogpic)
    return <p>Loading...</p>
    return(
        <>
        <img src={dogpic} alt="A Random Dog"/>
        </>
    )
}

export default App;