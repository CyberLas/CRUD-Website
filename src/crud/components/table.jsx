import React, {Fragment} from 'react'

const Table = (props) => {
    return(
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.length > 0 ? (
                            props.user.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button className="button muted-button" onClick={() => {props.editRow(user)}}>Edit</button>
                                        <button className="button muted-button" onClick={() => {props.deleteUser(user.id)}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No User</td>  
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Table