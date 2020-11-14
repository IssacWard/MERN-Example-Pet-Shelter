import Form from '../components/Form';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const [pet,setPet] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    });
    const [errors,setErrors] = useState({
        name:"",
        type:"",
        description:""
    });

    const handleInputChange = e => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(res =>{
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
    }
    return (
        <div class="m-4">
            <div>
                <div class="d-flex justify-content-between">
                    <h1>Pet Shelter</h1>
                    <Link to="/">Back to Home</Link>
                </div>
                <h3>Know a pet needing a home?</h3>
            </div>
            <Form 
                pet={pet} 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}/>
        </div>
    )
}