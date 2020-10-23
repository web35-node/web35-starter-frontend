import React, {useState} from 'react'
import axios from 'axios'

const DogAdd = (props) => {

    const initialFormState = {
        breed: "",
        imageUrl:""
    }

    const [dog, setDog] = useState(initialFormState)

    const changeHandler = (e) => {
        setDog({...dog, [e.target.name]: e.target.value})
    }

    const addDog = (e) => {
        e.preventDefault()
        axios.post(`${props.baseurl}/dogs`, dog)
            .then(res => {
                setDog(initialFormState)
                props.refreshHandler()
            })
            .catch(err =>{
                console.log(err)
            })
    }


    return (<article>
        <h2> Add Breed </h2>
        <form
            onSubmit={addDog}
        >
            <label>
                Breed
                <input 
                    type="text"  
                    name="breed"
                    value={dog.breed}
                    onChange={changeHandler}
                />
            </label>
            <label>
                URL to Image of Breed
                <input 
                    type="text"  
                    name="imageUrl"
                    value={dog.imageUrl}
                    onChange={changeHandler}
                />
            </label>
            <button type="submit">Submit Dog</button>
        </form>
    </article>)
}

export default DogAdd