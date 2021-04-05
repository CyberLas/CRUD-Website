import React, {Fragment, useState} from 'react'

const Edit = (props) => {
    const [data, setData] = useState({
        name: props.current.name,
        username: props.current.username
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    const clickea = (event) =>{
        event.preventDefault();
        //console.log(data)
        data.id = props.current.id
        props.updateUser(props.current.id, data)
        event.target.reset()
    }

    return(
        <Fragment>
            <div className="container">
                <form className="row" onSubmit={clickea}>
                    <div className="mt y-2">
                        <span> Name </span>
                        <input 
                            type        = "text" 
                            name        = "name"
                            className   = "form-control"
                            value       = {data.name}
                            placeholder = "Ingresar Name"
                            onChange    = {handleInputChange}
                        />
                    </div>
                    <hr/>
                    <div className="mt y-2">
                        <span> Username </span>
                        <input 
                            type        = "text"
                            name        = "username"
                            value       = {data.username}
                            className   = "form-control"
                            placeholder = "Ingresar Username"
                            onChange    = {handleInputChange}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit" > Editar Usuario</button>
                </form>
            </div>
        </Fragment>
    );
}

export default Edit