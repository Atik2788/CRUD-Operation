import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{backgroundColor: '#12636e'}}>
      <div className="w-50 bg-white p-3 rounded">
        <form action="">
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder={user.name} className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text" placeholder={user.email} className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder={user.age} className="form-control"/>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
