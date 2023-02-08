import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EventForm from '../hooks/useForm/eventForm';
import ClockForm from '../hooks/useForm/useForm';


const Model = ({ event = false, localClock, handleClock, handleClose, show, title }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1>{title}</h1>
                </Modal.Header>
                <Modal.Body>
                    {event ?
                        <EventForm
                            values={localClock}
                            handleClose={handleClose}
                            handleClock={handleClock}
                        />
                        :
                        <ClockForm
                            values={localClock}
                            handleClose={handleClose}
                            handleClock={handleClock}
                        />}

                </Modal.Body>

            </Modal>
        </>
    );
}

export default Model