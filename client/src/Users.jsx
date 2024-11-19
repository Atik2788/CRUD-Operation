import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Users = () => {
    const [users, setUsers] = useState([])

    // get all data form server
    useEffect(() =>{
        fetch('https://crud-khaki-phi.vercel.app/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
    }, [])


    // delete data from server by id
    const handleDelete = id =>{
        const proceed = confirm("Are you want to sure to delete?")
        if(proceed){
            fetch(`https://crud-khaki-phi.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted successfull')

                    // when delete a data its showing in the site, after relod then its removed,, to solve it(I mean without relod its removed)...
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining) 
                }
            })
        }
    }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{backgroundColor: '#12636e'}}>
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user, index) =>(
                        <tr className="text-center" key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                <Link className="btn btn-success ms-3" onClick={()=>handleDelete(user._id)}>Delete</Link>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users