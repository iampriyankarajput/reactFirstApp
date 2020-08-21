import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        gender: "",
        city: ""
    });

    const { name, gender, city } = user;
    const onInputChange = e => {
        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/Users");
    }

    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add a User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <input type="text" className="form-control" placeholder="Enter Gender" name="gender" value={gender} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" placeholder="Enter City" name="city" value={city} onChange={e => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddUser;