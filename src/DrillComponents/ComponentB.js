import React, {useState} from 'react';
import ComponentC from './ComponentC';
const ComponentB = (props)=>{
    return(
        <div className='border'>
            <h2>ComponentB</h2>
            <ComponentC user={props.user}/>
        </div>
    )
}

export default ComponentB;