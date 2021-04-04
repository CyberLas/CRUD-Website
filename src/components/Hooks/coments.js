import React, {useState, Fragment} from 'react'

const Coments = (props) => {
    console.log(props)
    return (
        <Fragment>
            <h2>Comments</h2>
            <hr className="bg-light" />
            <div className="media">
                <img className="mr-3" src={props.data.url} alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">{props.data.nombre}</h5>
                    {props.data.text}
                </div>
            </div>
            <h2>Comments</h2>
            <hr className="bg-light" />
            <div className="media">
                <img className="mr-3" src="https://via.placeholder.com/64" alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">Carlos</h5>
                    Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </Fragment>
    );
}

export default Coments