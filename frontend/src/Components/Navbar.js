import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const user = localStorage.getItem('user');
    //const username = JSON.parse(user)
    const username = 'username'
    console.log(user)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Robin Hood Army</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {user !== null ? (
                            <>
                                {user === 'admin' ? (
                                    <>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/admindashboard">Admin Dashboard <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/addmember">Add Member</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/assignlocation">Assign Location</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/alllocations">All Locations</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/memberdashboard">{username.memberName}<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/memberlocations">Locations <span className="sr-only">(current)</span></Link>
                                    </li>
                                    
                                    </>
                                )

                                }
                                <span className="navbar-text">
                                    <Link to="/">Logout</Link>
                                </span>
                            </>
                        ) : (
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/signin">Sign In</Link>
                                </li>
                                <span className="navbar-text">
                                    <Link to="/adminlogin">Admin Login</Link>
                                </span>
                            </>
                        )
                        }
                    </ul>



                </div>

            </nav>
        </div>

    )
}

export default Navbar
