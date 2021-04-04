import React, { Fragment, useState } from 'react'

const Lista = () => {
    const [list, setList] = useState([1,2,3,4,5,6])
    const [number, setNumber] = useState(7)

    const agregar = () => {
        setNumber(number + 1)
        setList([
            ...list,
            number
        ])
    }

    return(
        <Fragment>
            <h2>{list}</h2>
            <button onClick={agregar}>Agregar</button>
            <h4>
            {
                list.map((item,index) => 
                    <p key={index}>{item}</p>
                )
            }
            </h4>
        </Fragment>
    );
}

export default Lista