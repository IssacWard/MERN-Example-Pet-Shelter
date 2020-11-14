import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log("Error:", err))
    },[]);

    const Adopted = e => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
            .then(res =>{
                if(res.data.results){
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div class="m-4">
            <div>
                <div class="d-flex justify-content-between">
                    <h1>Pet Shelter</h1>
                    <Link to="/">Back to Home</Link>
                </div>
                <div class="d-flex justify-content-between">
                    <h3>Details about: {pet.name}</h3>
                    <button onClick={() => Adopted()}>Adopt</button>
                </div>
            </div>
            <table class="table w-75 table-borderless">
                <tbody>
                    <tr>
                        <th scope="col">Name:</th>
                        <td>{pet.name}</td>
                    </tr>
                    <tr>
                        <th scope="col">Type:</th>
                        <td>{pet.type}</td>
                    </tr>
                    <tr>
                        <th scope="col">Description:</th>
                        <td>{pet.description}</td>
                    </tr>
                    <tr>
                        <th scope="col">Skills:</th>
                        <td>
                            <p>{pet.skill1}</p>
                            <p>{pet.skill2}</p>
                            <p>{pet.skill3}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}