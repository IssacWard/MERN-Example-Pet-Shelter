import Form from '../components/Form';
import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default props => {

    const [name,setName] = useState();
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

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                setPet(res.data.results);
                setName(res.data.results.name)
                })
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = e => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, pet)
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
            <span class="d-flex justify-content-center p-2 lead font-weight-bold">Edit {name}:</span>
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