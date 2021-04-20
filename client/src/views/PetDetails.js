import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate} from '@reach/router';
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
        <div>
            <span class="d-flex justify-content-center p-2 lead font-weight-bold">About {pet.name}:</span>
            <div class="d-flex justify-content-center">
                <table class="table w-50">
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
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center p-2">
                <button class="btn bg-info text-white w-50" onClick={() => Adopted()}>Adopt</button>
            </div>
        </div>
    )
}