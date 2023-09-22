import React, { useState } from 'react';

const Counter = function(){
    const [likes, setCount] = useState(0);
  
    function increment(){
      setCount(likes+1)
    }
    function decrement(){
      setCount(likes-1)
    }
    return(
        <div>
            <h1>{likes}</h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter