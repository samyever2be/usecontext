import React, {useState} from 'react';
import ComponentB from './ComponentB';
const ComponentA = ()=>{
    const[user, setUser] = useState("Subasri")
    return(
        <div className='border'>
            <h2>ComponentA</h2>
             <h3>{`Hello ${user}`}</h3>
            <ComponentB user={user}/>
        </div>
    )
}

export default ComponentA;