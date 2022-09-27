import React from 'react';
import PropTypes from 'prop-types';

export const UsersComponent = ({listOfUsers,error,deleteUser}) => {

    return(
        <div id="users-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfUsers.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.username}</td>
                                <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

UsersComponent.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    deleteUser:PropTypes.func
}