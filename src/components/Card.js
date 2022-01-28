import React from "react"

export default function Card(props) {
    
    console.log(props)
    
    return (
        <div className="card">
            <img className="card--image"src={props.imageUrl}/>
            <h1 className="card--header">{props.title}</h1>
            <div className="card--maps">
                <p><i class="fas fa-map-marker-alt"></i>{props.location}</p>
                <p><a href={props.googleMapsUrl}>View in Google Maps</a></p>
            </div>
            <p className="card--dates">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>
        </div>
    )
}