import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
const AddMember = () => {
  const [membersList,setMembersList] = useState([]);
  useEffect(() => {
    const fetchMembers = async () =>{
      try{
      const response = await axios.get("https://robinhood-22em.vercel.app/admin/fetchMembers"); 
      setMembersList(response.data);
      
      console.log(response.data)
      }catch(error)
      {
        console.log(error)
      }
    }
    fetchMembers();
  },[])

  const handleClick = async (userId) => {
   
    try{
      const updatedUser = await axios.post("https://robinhood-22em.vercel.app/admin/updateStatus",{userId});
      alert('status updated');
      setMembersList(prevMembers =>
        prevMembers.map(member =>
            member._id === userId ? { ...member, addedStatus: 1 } : member
        )
    );
    }catch(error)
    {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <div className='container'>
      <h2>List of Members</h2>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Member Name</th>
            <th scope="col">Email</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {membersList.map((member,index) => (
          <tr>
            <td scope='row'>{index + 1}</td>
            <td>{member.memberName}</td>
            <td>{member.memberEmail}</td>
            <td>{member.addedStatus === 1?'Added':<button onClick={() => handleClick(member._id)} className='btn'>Add</button>}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default AddMember
