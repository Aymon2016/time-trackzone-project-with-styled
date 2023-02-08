import React, { useState } from 'react'
import Model from './model';
import { ClockShow } from './ui/ClockActionShow';
import Button from './ui/button'

const ClockAction = ({ local = true, createAndDeleteClock, localClock, updateClock }) => {
    const [isCreate, setIsCreate] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    // <!-- model state -->
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => (
        setShow(true),
        setIsEdit(true),
        setIsCreate(false)
    );

    const [createShow, setCreateShow] = useState(false);
    const handleCreateClose = () => setCreateShow(false);
    const handleCreateShow = () => (
        setCreateShow(true),
        setIsCreate(true),
        setIsEdit(false)
    );

    return (
        <ClockShow margin="2px 5px" padding="2px 4px">
            <Button
                onClick={handleShow}>
                Edit
            </Button>

            {isEdit ? <Model
                handleClock={updateClock}
                localClock={localClock}
                show={show}
                handleClose={handleClose}
                title={'Edit your Clock'}

            ></Model> : ''}
            {local ?
                <Button
                    onClick={handleCreateShow}>
                    create
                </Button> :
                <Button
                    onClick={() => createAndDeleteClock(localClock.id)}>
                    Delete
                </Button>
            }
            {isCreate ? <Model
                handleClock={createAndDeleteClock}
                localClock={localClock}
                show={createShow}
                handleClose={handleCreateClose}
                title={'Create your Clock'}
            ></Model> : ''}

        </ClockShow>
    )
}


export default ClockAction