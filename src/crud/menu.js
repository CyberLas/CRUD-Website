import React, {Fragment, useState} from 'react'
import Table             from './components/table'
import Formulario        from './components/user'
import Editar            from './components/edit'
import {v4 as uuidv4}    from 'uuid'

const Menu = (props) => {
    const Arrays = [
        {id: uuidv4(), name: 'carlos1', username: 'car0'},
        {id: uuidv4(), name: 'carlos2', username: 'car1'},
        {id: uuidv4(), name: 'carlos3', username: 'car2'},
    ]
    
    // Data Inicial
    const [data, setData] = useState(Arrays)

    //Agregar User
    const addUser = (user) => { 
        user.id = uuidv4();
        setData({
            ...data,
            user
        })
    }

    //Eliminar User
    const deleteUser = (id) => {
        //console.log(id)
        const filtro = data.filter(user => user.id !== id)
        setData(filtro)
    }

    //Editar User
    const [edit, setEdit] = useState(false)

    const [current, setCurrent] = useState({
        id:null,
        name: '',
        username: ''
    })

    const editRow = (user) => {
        setEdit(true)
        setCurrent({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }

    const updateUser = (id,updateUser) => {
        setEdit(false)
        setData(data.map(user =>(user.id === id ? updateUser : user)))
    }

    return(
        <Fragment>
            <div className="container">
                <h1>CRUD</h1>
                <div className="flex-row">
                    <div className="flex-large">
                        {
                            !edit ? (
                                <div>
                                    <h2>Add User</h2>
                                    <Formulario 
                                        agregar = {addUser}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <h2>Edit User</h2>
                                    <Editar
                                        current    = {current}
                                        updateUser = {updateUser}
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex-large">
                        <h2>View User</h2>
                        <Table 
                            user={data}
                            deleteUser={deleteUser}
                            setEdit={setEdit}
                            editRow={editRow}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Menu