import React,{useState, useContext} from 'react'
import { useHistory } from 'react-router';
import UserContext from '../Contexts/users/UserContext';
import { Link } from 'react-router-dom';

export default function EditUser() {
    const history = useHistory();
    const {updateUser, editUser} = useContext(UserContext);

    const [CurrUser, setCurrUser] = useState(editUser);

    //const {id} = useParams();


    const handleChange = (event) => {
        setCurrUser({...CurrUser, [event.target.name] : event.target.value});
    }

    const handleSubmit = (id, user) => {
        updateUser(id, user);
        alert("User updated successfully !!!")
        history.push(`/home`)
    }

    return (
        <div className="container my-5">
            <h1 className="text-center my-3">Edit User</h1>
            <form>
                <div className="row my-3">
                    <div className="col">
                        <input type="text" name="fName" id="fName" value={CurrUser.fName} className="form-control form-control-lg" placeholder="First name" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <input type="text" name="lName" id="lName" value={CurrUser.lName} className="form-control form-control-lg" placeholder="Last name" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" value={CurrUser.email} className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Email ID" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input type="mobile" name="mobile" id="mobile" value={CurrUser.mobile} className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Mobile Number" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-lg btn-primary" onClick={() => handleSubmit(CurrUser.id, CurrUser)}>Update User</button>
                <button type="reset" className="btn btn-lg btn-danger mx-3" onClick= {() => history.push(`/home`)}>Cancel</button>
                <Link className="btn btn-lg btn-success" to="/">Back to Home Page</Link>
            </form>
        </div>
    )
}
