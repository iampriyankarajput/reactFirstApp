import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        gender: "",
        city: ""
    });

    const { name, gender, city } = user;
    const onInputChange = e => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    },[]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/Users");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        console.log(result.data)
        setUser(result.data);
    }
    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit a User</h2>
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
                        <button type="submit" className="btn btn-block btn-warning mt-2">Update User</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditUser;