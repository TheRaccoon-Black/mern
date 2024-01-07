import React from 'react';

function CreateUser(){
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 text-left">
                <form>
                    <h2>Tambah User</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text' placeholder='Enter Age' className='form-control'/>
                    </div>
                    <button className='btn btn-success'> Kirim </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;