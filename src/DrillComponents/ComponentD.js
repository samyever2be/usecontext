import React, {useState} from 'react';

const ComponentD = (props)=>{
    
    return(
        <div className='border'>
            <h2>ComponentD</h2>
            <h3>{`Goodbye ${props.user}`}</h3>
        </div>
    )
}

export default ComponentD;