import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AssignLocation = () => {
    const [members, setMembers] = useState([]);
    const [formData,setFormData] = useState({
        link : '',
        ownerName:'',
        ownerContact:0,
        memberName : '',
        memberId : '',
        collectionStatus:0
    })
    const handleChange =(e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSelectChange = (e) => {
        const selectedMember = members.find(member => member._id === e.target.value);
        setFormData({
            ...formData,
            memberId: selectedMember._id,  // Store ID
            memberName: selectedMember.memberName // Store name
        });
    };

    useEffect(() => {
        const getAddedMembers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/admin/addedmembers");
                setMembers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAddedMembers();
    }, [])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:4000/location/assignlocation',formData);
            console.log(response.data);
            alert('Location Assigned')
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='container signup'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="inputEmail4">Location Link</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="http://www.maps.com/...."
                            name="link"
                            onChange={handleChange}
                            value={formData.link}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inputName4">Owner's Name</label>
                        <input type="text" className="form-control" id="inputName4" placeholder="Name"
                            name="ownerName"
                            onChange={handleChange}
                            value={formData.ownerName}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inputContact4">Owner's Name</label>
                        <input type="number" className="form-control" id="inputContact4" placeholder="Contact"
                            name="ownerContact"
                            onChange={handleChange}
                            value={formData.ownerContact}
                        />
                    </div>
                    <div className='form-group'>
                        <select class="form-control" name="memberId" onChange={handleSelectChange}>
                            <option disabled>Select Member</option>
                            {members.map((member) => (
                                <option key={member._id} value={member._id}>{member.memberName}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn">Assign</button>
                </form>
            </div>
        </div>
    )
}

export default AssignLocation
