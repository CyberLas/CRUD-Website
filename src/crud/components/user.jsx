import React, {Fragment, useState}    from 'react'

const User = (props) => {
    
    const [data, setData] = useState({
        name: '',
        username: ''
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
        props.agregar(data)
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
                            className   = "form-control"
                            placeholder = "Ingresar Username"
                            onChange    = {handleInputChange}
                        />
                    </div>
                    <hr/>
                    <span> Verificación : {data.name} {data.username}</span>
                    <hr/>
                    <button className="btn btn-primary" type="submit" > Enviar</button>
                </form>
            </div>
        </Fragment>
    );
}

export default User