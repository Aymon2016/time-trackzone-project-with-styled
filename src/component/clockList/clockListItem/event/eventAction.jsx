import React, { useState } from 'react'
import Model from '../../../../shared/model'
import Button from '../../../../shared/ui/button';
const EventAction = ({ clockId, createEvent }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button
                variant="primary" onClick={handleShow}>
                Create Event
            </Button>

            <Model
                event={true}
                handleClock={createEvent}
                localClock={clockId}
                show={show}
                handleClose={handleClose}
                title={'Create Your Event'}

            ></Model>
        </div>
    )
}

export default EventAction