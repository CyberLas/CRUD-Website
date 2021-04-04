import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [number, setNumber] = useState(0)
    const Click = () =>{
        setNumber(number+1);
    }
    
    return (
        <Fragment>
            <h3>H3 : {number}</h3>
            <button onClick={Click}>click</button>
        </Fragment>
    );
}

export default Contador