import React, {Fragment} from 'react'

const Props = (props) => {
    console.log(props)
    return (
        <Fragment>
            <h1>Hi   {props.person}</h1>
            <h1>Edad {props.age}</h1>
        </Fragment>
    );
}

export default Props