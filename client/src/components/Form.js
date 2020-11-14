import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const {pet, errors, handleInputChange, onSubmitHandler, handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div class="d-flex flex-row">
                <div class="d-flex flex-column mr-5">
                    <p>
                        <label>Name:</label><br/>
                        <input type="text" name="name" value={pet.name} onChange = {handleInputChange}/>
                        <span>{errors.name ? errors.name.message : ""}</span>
                    </p>
                    <p>
                        <label>Type:</label><br/>
                        <input type="text" name="type" value={pet.type} onChange = {handleInputChange}/>
                        <span>{errors.type ? errors.type.message : ""}</span>
                    </p>
                    <p>
                        <label>Description:</label><br/>
                        <input type="text" name="description" value={pet.description} onChange = {handleInputChange}/>
                        <span>{errors.description ? errors.description.message : ""}</span>
                    </p>
                </div>
                    <div class="d-flex flex-column">
                    <p>
                        <label>Skill 1:</label><br/>
                        <input type="text" name="skill1" value={pet.skill1} onChange = {handleInputChange}/>
                    </p>
                    <p>
                        <label>Skill 2:</label><br/>
                        <input type="text" name="skill2" value={pet.skill2} onChange = {handleInputChange}/>
                    </p>
                    <p>
                        <label>Skill 3:</label><br/>
                        <input type="text" name="skill3" value={pet.skill3} onChange = {handleInputChange}/>
                    </p>
                </div>
            </div>
            <input type="submit"/>
        </form>
    )
}