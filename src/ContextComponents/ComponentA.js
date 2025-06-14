import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB';
export const UserContext = createContext();  
export const DegreeContext = createContext();  
const ComponentA = ()=>{
    const [user, setUser] = useState("Jayavaradhan");
    const [degree, setDegree] = useState("Bsc");
    return(
        <div className='box'>
            <h2>Context ComponentA</h2>
            <h3>{`Hai ${user}, your degree is ${degree}`}</h3>
             <UserContext.Provider value={user}>
                <DegreeContext.Provider value={degree}>
                    <ComponentB/>
                </DegreeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;