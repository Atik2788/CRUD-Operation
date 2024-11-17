import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
    }, [])

    const handleDelete = id =>{
        const proceed = confirm("Are you want to sure to delete?")
        if(proceed){
            console.log('delete', id);
        }
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
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
                                <Link to={`/details/${user._id}`} className="btn btn-success ms-3">Details</Link>
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