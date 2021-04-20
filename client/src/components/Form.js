import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const {pet, errors, handleInputChange, onSubmitHandler, handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div class="d-flex flex-row">
                <div class="d-flex flex-column">
                    <p>
                        <label>Name:</label><br/>
                        <input type="text" name="name" value={pet.name} onChange = {handleInputChange}/>
                        <p class="text-danger">{errors.name ? errors.name.message : ""}</p>
                    </p>
                    <p>
                        <label>Type:</label><br/>
                        <input type="text" name="type" value={pet.type} onChange = {handleInputChange}/>
                        <p class="text-danger">{errors.type ? errors.type.message : ""}</p>
                    </p>
                    <p>
                        <label>Description:</label><br/>
                        <input type="text" name="description" value={pet.description} onChange = {handleInputChange}/>
                        <p class="text-danger">{errors.description ? errors.description.message : ""}</p>
                    </p>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <input class="btn bg-info text-white w-75" type="submit"/>
            </div>
        </form>
    )
}