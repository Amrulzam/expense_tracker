import React,{useState} from 'react';


export const Car= () => {
    const [brand, setBrand] = useState("ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("2007");
    const [color,setColor]= useState("blue");

    const changeColor=() =>{
        setColor("red");
        
    }

    return(
        <div>
            <h2 id='demo'> My {brand}</h2>
            <p > It is a {color} {model} from {year}</p><br/>
            <label>Enter Brand: </label> <input type='text' onChange={(e)=> setBrand(e.target.value)} placeholder='Enter...'></input><br/>
            <label>Enter Model: </label> <input type='text' onChange={(e)=> setModel(e.target.value)} placeholder='Enter...'></input><br/>
            <label>Enter Year: </label> <input type='text' onChange={(x)=> setYear(x.target.value)} placeholder='Enter...'></input>
            <button onClick={changeColor}>Click</button>

        </div>

    );
}



