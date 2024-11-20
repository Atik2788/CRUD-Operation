import { useNavigate } from "react-router-dom";



const CreateUser = () => {

    const navigate = useNavigate()

    const handleAddUser = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const user = {name, email, age}
        // console.log(order);


        fetch('https://crud-khaki-phi.vercel.app/app/users', {

            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('User added successfully!')
                navigate('/')
            }
        })

    }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{backgroundColor: '#12636e'}}>
        <div className="w-50 bg-white rounded p-3">
            <form action="" onSubmit={handleAddUser}>
                <h2>Add User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" placeholder="Enter Name" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Enter Email" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" name="age" placeholder="Enter Age" className="form-control" />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser