import  { useState} from "react";

const State =() => {
    const [total , setTotal] =useState(0);
    const [colour,setColour] = useState("red")
    return (
        <div>
            <button onClick={() => {
                setTotal(total+1);
            }}> Bhadta Hua</button>

            <button onClick={() => {
                setTotal(total-1);
            }}>Ghatta hua</button>

            <h2>{total}</h2>



            <h1 style={{color:colour}}>My Favourite Colour!</h1>

            <button onClick={() =>{
                setColour("blue");
            }}>Blue</button>

<button onClick={() =>{
                setColour("green");
            }}>Green</button>

<button onClick={() =>{
                setColour("red");
            }}>red </button>
        </div>


        






    )
    

}
export default State;