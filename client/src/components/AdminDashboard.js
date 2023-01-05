import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { success } from '../Toast'
import { deleteUser } from '../Utils/ApiUtils'

function AdminDashboard() {
  const navigate = useNavigate()
  const [addUser, setAddUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/allUsers`)
      const data = await res.json()
      console.log(data);
      setAddUser(data.users)
      setLoading(false);
    })()
  }, [])


  const onDeteteUser = async(id) => {
    console.log(id);
    const res = await deleteUser(id)
    if (res.status === 200) {
      success(res.data.message)
      console.log("responce message:", res.data.message);
    } else {
      console.log("error")
    }
  }


  return (
    <div>
      <div className='row bg-primary pt-1 fixed'>
        <div className='col-4'><h3 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Recovero</h3></div>
        <div className='col-3'><h4 className='mt-3 text-align text-light'>Admin</h4></div>
        <div className='col-2'><button className='mt-3 button-style' onClick={() => navigate('/addMember')} ><i class="fa-solid fa-plus"></i> ADD NEW MEMBER</button></div>
        <div className='col-2'><button className='mt-3 button-style' onClick={() =>navigate('/signin')}>LOGOUT</button></div>
      </div>

      <div>
        {addUser.length === 0
          ? <h3 className='text-danger'><i>No any user available...</i></h3>
          : <div className='container'>
            <div className='margin'>
              <div className='row mt-3 ms-5'>
                <div className='col-1 text-success fs-3 todo-text'>S.no</div>
                <div className='col-3 text-success fs-3 todo-text'>All Users</div>
                <div className='col-3 text-success fs-3 todo-text'>Status</div>
                <div className='col-3 text-success fs-3 todo-text'>Billing Details</div>
                <div className='col-1 text-success fs-3 todo-text'>Delete</div>
              </div>
            </div>

            <div className='margin'>
              {loading
                ? (<p>Loading....</p>)
                : (addUser.map((item, index) => (
                  <div className='row mt-3 ms-5 ' key={item._id}>
                    <div className='col-1 fs-4 todo-text'>{index + 1}</div>
                    <div className='col-3 fs-4 todo-text'>{item.email}</div>
                    <div className='col-3 fs-4 todo-text'>{item.status}</div>
                    <div className='col-2 todo-text ms-4'>&#x20B9; {Math.floor(Math.random() * 1000) + 1}</div>
                    <div className='col-2 todo-text ms-4'><i onClick={() => onDeteteUser(item._id)} className="text-danger fa-solid fa-trash-can fs-6"></i></div>
                  </div>
                )))}
            </div>
          </div>}
      </div>
    </div>
  )
}

export default AdminDashboard