import react from "react";

function Keypad(){
    function handleType(event){
    }
    return(
        <input onChange={()=> console.log("Entering password...")} type="password" name="keypad" placeholder="Enter Pin"></input>
    )
}

export default Keypad;