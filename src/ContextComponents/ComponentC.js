import React, {useState} from 'react';
import ComponentD from './ComponentD';
const ComponentC = () =>{
    return(
        <div className='box'>
            <h2>ComponentC</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC;
