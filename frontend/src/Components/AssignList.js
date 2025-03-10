import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AssignList = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        const fetchAllLocations = async () => {
            try {
                const response = await axios.get("https://robinhood-22em.vercel.app/location/fetchalllocations");
                setLocations(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllLocations();
    },[])
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2>Assigned Locations</h2>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Location</th>
                            <th scope='col'>Member Name</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Owner Contact</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            locations.map((location,index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td><Link to={location.link}>{location.link}</Link></td>
                                    <td>{location.memberName}</td>
                                    <td>{location.ownerName}</td>
                                    <td>{location.ownerContact}</td>
                                    <td>{location.collectionStatus === 1 ? 'Collected' : 'Pending' }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AssignList
