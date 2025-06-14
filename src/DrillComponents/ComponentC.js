import React, {useState} from 'react';
import ComponentD from './ComponentD';
const ComponentC = (props)=>{
    return(
        <div className='border'>
        <h2>ComponentC</h2>
        <ComponentD user={props.user}/>
        </div>
    )
}

export default ComponentC;