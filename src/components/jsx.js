import React, { Fragment } from 'react'

const jsx = () => {
    const saludo = 'Hola JSX';
    const temperatura = 21;
    return(
        <Fragment>
            <h2>{saludo}</h2>
            <h4>
            {
                temperatura > 21 ? 'calor' : 'frio'
            }
            </h4>
        </Fragment>
    );
}

export default jsx