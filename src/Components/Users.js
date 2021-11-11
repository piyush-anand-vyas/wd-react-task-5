
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import NavBar from './NavBar'
import UserContext from '../Contexts/users/UserContext'

export default function Users() {

    const {users, removeUser, findUser} = useContext(UserContext);
    const history = useHistory();

    const EditUser = (id) => {
        findUser(id);
        history.push(`editUser/${id}`);
    }

    return (
        <div className="container">
            <NavBar />
            <table className="table table-lg table-borderless text-center" style={{ fontSize: "20px" }}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Mobile Number</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.fName} {user.lName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td><button className="btn btn-primary btn-lg px-4" onClick = {() => EditUser(user.id)}>Edit</button></td>
                                    <td><button className="btn btn-danger btn-lg px-4" onClick={() => removeUser(user.id)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
