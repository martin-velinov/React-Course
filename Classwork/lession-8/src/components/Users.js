import React from 'react'

const Users = ({userList}) => {
  return (
    <div id='users'>
        <h2>Users</h2>
        {userList.length >0 ? 
        <table>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
            <tbody>
                {userList.map((user,i)=>{
                   return(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
                   )
                })}
            </tbody>
        </table>
        :
            <h2>loading users</h2>
        }
    </div>
  )
}

export default Users