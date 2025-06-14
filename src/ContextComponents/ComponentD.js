import React, {useState, useContext} from 'react';

import { UserContext } from './ComponentA';
import { DegreeContext } from './ComponentA';
const ComponentD = ()=>{

    const user = useContext(UserContext);
    const degree = useContext(DegreeContext);
    return(
        <div className='box'>
            <h2>ComponentD</h2>
            <h2>{`Bye ${user}, ${degree}`}</h2>
        </div>
    )
}

export default ComponentD;