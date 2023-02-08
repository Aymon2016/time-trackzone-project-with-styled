import React from 'react'

const EventDisplay = ({ allEvents }) => {


    return (
        <>
            {allEvents ? allEvents.map((item) => (
                <li style={{ listStyleType: 'none' }}><h6>{item.title} <span>{item.date}</span>  <span>{item.timezone}</span></h6></li>)) : ''}
        </>
    )
}

export default EventDisplay