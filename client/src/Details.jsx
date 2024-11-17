import { useLoaderData } from "react-router-dom"


const Details = () => {

    const user = useLoaderData();
    console.log(user);

  return (
    <div className="vh-100 bg-primary d-flex justify-content-center align-items-center">
    <div className="w-50 bg-white p-3 rounded">
      <form action="">
        <h2>User Details</h2>
        <div className="mb-2">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter Name" className="form-control"/>
        </div>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" className="form-control" />
        </div>
        <div className="mb-2">
          <label htmlFor="">Age</label>
          <input type="text" placeholder="Enter Age" className="form-control"/>
        </div>
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Details