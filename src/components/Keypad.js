// Code Keypad Component Here
import React from "react";
function Keypad (){

    // let [password, setPassword] = useState("")


function handleKey(){

    console.log("Entering Password");
}

    return (
        <div>
            <input type="password" alt="input password" onChange={handleKey}></input>

        </div>
    )
}

export default Keypad;