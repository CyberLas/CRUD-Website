import React, {useState, Fragment} from 'react'

const Formulario = () => {
    
    const [data, setData] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.id] : event.target.value
        })
    }

    const clickea = (event) =>{
        event.preventDefault();
        console.log(data)
    }

    return (
        <Fragment>
            <div className="container mt-5">
                <h1>Form</h1>
                <form className="row" onSubmit={clickea}>
                    <div className="col-md-3">
                        <input 
                            type="text"
                            placeholder="Ingresar Nombre" 
                            className="form-control"
                            id="nombre"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Ingresar Apellido"
                            className="form-control"
                            id="apellido"
                            onChange={handleInputChange}
                        />
                    </div>
                    <span>{data.nombre} - {data.apellido}</span>
                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit" > Enviar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Formulario