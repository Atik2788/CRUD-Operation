import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  const navigate = useNavigate()

  const handleUpdate = event =>{
    event.preventDefault()

    const form = event.target
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const newUser = {name, email, age}
    console.log(newUser);

    fetch(`https://crud-khaki-phi.vercel.app/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)

    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.acknowledged){
        alert('User updated successfully')
        navigate('/')
      }
    })
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{backgroundColor: '#12636e'}}>
      <div className="w-50 bg-white p-3 rounded">
        <form action="" onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" name="name" defaultValue={user.name} placeholder={user.name} className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="text"  name="email" defaultValue={user.email} placeholder={user.email} className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text"  name="age" defaultValue={user.age} placeholder={user.age} className="form-control"/>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
