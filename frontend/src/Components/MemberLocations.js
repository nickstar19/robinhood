import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const MemberLocations = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const memberId = user._id;
    const [locations, setLocations] = useState([]);
    useEffect((e) => {
        const fetchLocations = async (req, res) => {
            try {
                const response = await axios.get(`http://localhost:4000/location/memberlocations?memberId=${memberId}`);
                setLocations(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLocations();
    }, [])
    const handleClick = async (locationId) => {

        try {
            const updatedLocation = await axios.post("http://localhost:4000/location/updatestatus", { locationId });
            alert('status updated');
            setLocations(prevLocations => 
                prevLocations.map(location => 
                    location._id === locationId ? { ...location, collectionStatus: 1 } : location
                )
            );
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2>List of Locations</h2>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Location</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, index) => (
                            <tr>
                                <td scope='row'>{index + 1}</td>
                                <td>{location.link}</td>
                                <td>{location.collectionStatus === 1 ? 'Collected' : <button onClick={() => handleClick(location._id)} className='btn'>Collect</button>}</td>
                            </tr>
                        )

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MemberLocations
