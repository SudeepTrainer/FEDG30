import { useState,useEffect } from "react"

export default function APITest(){

    const [starWarData,setStarWarData] = useState();
    const [count,setCount] = useState(0);
    console.log("Component rendered initial");
    
    function fetchData(){
        fetch("https://swapi.dev/api/people/2")
        .then(response => response.json())
        .then(data => 
            {
                console.log("fetchData called");
                return setStarWarData(data)
            }
            )
    }

    useEffect(fetchData,[count])
    
    console.log("Component rendered between");

    function updateCount(){
        setCount(count => count + 1)
    }

    return (
        <>
            <h3>{JSON.stringify(starWarData)}</h3>
            <button onClick={updateCount}>NExt</button>
        </>
    )
}