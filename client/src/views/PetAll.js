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
        <div>
            <span class="d-flex justify-content-center p-2 lead font-weight-bold">These pets are looking for a good home!</span>
            <div class="d-flex justify-content-center p-2">
                <table class="table table-striped table-bordered w-75">
                    <thead class="thead-dark">
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
                                    <td scope="row">{pets.name}</td>
                                    <td scope="row">{pets.type}</td>
                                    <th scope="row">
                                        <Link class="mr-2 text-info" to={`/pets/${pets._id}`}>Details</Link>
                                        <Link class="text-info" to={`/pets/${pets._id}/edit`}>Edit</Link>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}