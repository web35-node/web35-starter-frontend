import React from 'react'
import axios from 'axios'

const DogCard = (props) => {
    console.log(props)

    const onDelete = (e) => {
        e.preventDefault()
        console.log("delete button on ", props.dog.id)
        axios.delete(`${props.baseurl}/dogs/${props.dog.id}`)
            .then((res)=> {
                console.log(res)
                props.refreshHandler()
            })
            .catch((err)=> {
                console.log(err)
            })
    }


    return(
        <>
            <article className="dogCard">
                <h3>{props.dog.breed}</h3>
                {
                    props.dog.imageUrl != "" ? <img src={props.dog.imageUrl} alt={props.dog.breed} /> : <p>No Image Found</p>
                }
                <button
                    onClick={onDelete}
                >Delete Dog</button>
            </article>
        </>

    )
}

export default DogCard