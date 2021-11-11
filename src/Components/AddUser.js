import React,{useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import UserContext from '../Contexts/users/UserContext';
import { Link } from 'react-router-dom';

export default function AddUser() {

    const {addUser} = useContext(UserContext);

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");

    const adduser = (e) => {
        e.preventDefault();
        const user ={
            id : uuidv4(),
            fName: fName,
            lName : lName,
            email : email,
            mobile: mobile
        }

        addUser(user);
        alert("User Added Successfully");
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";

    }

    return (
        <div className="container my-5">
            <h1 className="text-center my-3">Add User</h1>
            <form>
                <div className="row my-3">
                    <div className="col">
                        <input type="text" name="fName" id="fName" className="form-control form-control-lg" placeholder="First name"onChange = {(event) => setfName(event.target.value)}/>
                    </div>
                    <div className="col">
                        <input type="text" name="lName" id="lName" className="form-control form-control-lg" placeholder="Last name" onChange = {(event) => setlName(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Email ID" onChange = {(event) => setemail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="mobile" name="mobile" id="mobile" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Mobile Number" onChange = {(event) => setmobile(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-lg btn-primary" onClick = {adduser}>Add User</button>
                <button type="reset" className="btn btn-lg btn-danger mx-3">Cancel</button>
                <Link className="btn btn-lg btn-success" to="/">Back to Home Page</Link>
            </form>
        </div>
    )
}
