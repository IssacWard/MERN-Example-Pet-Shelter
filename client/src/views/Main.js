import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    const [pet, setPet] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPet(res.data.results))
            .catch(err => console.log("Error:", err))
    },[]);

    return (
        <div class="m-4">
            <div>
                <div class="d-flex justify-content-between">
                    <h1>Pet Shelter</h1>
                    <Link to="/pets/new">Add a Pet to the Shelter</Link>
                </div>
                <h3>These pets are looking for a good home.</h3>
            </div>

            <table class="table table-striped table-bordered w-75">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pet.map((pets, idx)=>{
                        return (
                            <tr>
                                <th scope="row">{pets.name}</th>
                                <th scope="row">{pets.type}</th>
                                <th scope="row">
                                    <Link class="m-2" to={`/pets/${pets._id}`}>Details</Link>
                                    <Link to={`/pets/${pets._id}/edit`}>Edit</Link>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}