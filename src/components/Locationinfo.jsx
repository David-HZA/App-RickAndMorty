import React from 'react'
import './styles/locationInfo.css'

const Locationinfo = ({location}) => {
    return (
        <article className='locationinfo'>
            <h2>{location?.name}</h2>
            <ul>
                <li>
                    <span className='info-type'>Type: </span>
                        {location?.type}</li>
                <li>
                    <span className='info-type'>Dimension: </span>
                        {location?.dimension}</li>
                <li>
                    <span className='info-type'>Population: </span>
                        {location?.residents.length}</li>
            </ul>
            <br />
        </article>
    )
}

export default Locationinfo