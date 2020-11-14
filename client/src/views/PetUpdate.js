import Form from '../components/Form';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default props => {

    const [name,setName] = useState();
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
        <div class="m-4">
            <div>
                <div class="d-flex justify-content-between">
                    <h1>Pet Shelter</h1>
                    <Link to="/">Back to Home</Link>
                </div>
                <h3>Edit {name}</h3>
            </div>
            <Form 
                pet={pet} 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}/>
        </div>
    )
}