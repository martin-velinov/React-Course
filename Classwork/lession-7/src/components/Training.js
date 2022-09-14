import React from 'react'



const Training = ({listOfThings,deletePerson}) => {
  
    return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    
                    <th>
                        Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Year
                    </th>
                   <th>
                    actions
                   </th>
                </tr>
            </thead>
            <tbody>
                {listOfThings.map((person,i)=>{
                    return(
                    <tr key={i}>
                        
                        <td>
                            {person.name}
                        </td>
                        <td>
                            {person.lastName}
                        </td>
                        <td>
                            {person.year}
                        </td>
                        <button onClick={() => deletePerson(person.id)}>delete</button>
                    </tr>
                    )
                })}
            </tbody>
        </table>

    </div>
  )
}

export default Training


