import { useState } from "react"
import { Link } from "react-router-dom"


const Users = () => {
    const [user, setUser] = useState([{
        Name: "Yoursaf",
        Email: 'yousaf@gamil.com',
        Age: 20
    }])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    user.map((user, index) =>(
                        <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
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