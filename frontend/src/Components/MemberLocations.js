import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MemberLocations = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const memberId = user._id;
    const [locations, setLocations] = useState([]);
    useEffect((e) => {
        const fetchLocations = async (req, res) => {
            try {
                const response = await axios.get(`https://robinhood-22em.vercel.app/location/memberlocations?memberId=${memberId}`);
                setLocations(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLocations();
    }, [])
    const handleClick = async (locationId) => {

        try {
            const updatedLocation = await axios.post("https://robinhood-22em.vercel.app/location/updatestatus", { locationId });
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
                            <th scope="col">Owner Name</th>
                            <th scope="col">Owner Contact</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><Link to={location.link}>{location.link}</Link></td>
                                <td>{location.ownerName}</td>
                                <td>{location.ownerContact}</td>
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
