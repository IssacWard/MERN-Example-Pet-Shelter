import Form from '../components/Form';
import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const [pet,setPet] = useState({
        name:"",
        type:"",
        description:""
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
        <div>
            <span class="d-flex justify-content-center p-2 lead font-weight-bold">Know a pet needing a home?</span>
            <div class="d-flex justify-content-center">
                <Form 
                    pet={pet} 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    errors={errors}/>
            </div>
        </div>
    )
}