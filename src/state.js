import React from 'react'
import { useState } from 'react';
// react-router-dom
function State ()  {
const [input , setiut] = useState("np");

function inputHandle(event){
    setinput(event.target.value)
}
return(
<>
<h1>
    {input}
</h1>
<input type="text" placeholder='Enter name' onChange={(e)=>inputHandle(e)}></input>
</>
);
}

export default State