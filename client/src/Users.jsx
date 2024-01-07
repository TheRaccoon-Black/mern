import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function User(){
    const [users, setUsers] = useState([{
        Name : 'Ojik',Email : 'tes@gmail.com',Age : 20
    }])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 text-left">
            <Link to="/create" className="btn btn-success">Tambah ++</Link>
                <table className='table'>
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
                            users.map(user => {
                                return <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td><Link to="/update" className="btn btn-success">Edit </Link><button>Delete</button></td>
                                </tr>
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User;