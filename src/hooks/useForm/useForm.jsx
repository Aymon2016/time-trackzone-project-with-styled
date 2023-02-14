import { useEffect, useState } from "react"
import TIMEZONE_OFFSET from '../../constant/timezoneOffset'
import { getOffsets } from '../../utilis/utilis'
import Button from '../../shared/ui/button'
import Label from "../../shared/ui/label"
import TextInput from "../../shared/ui/textInput"
import styled from 'styled-components';

const Container = styled.div`
        width:100%;
        padding:1rem;
        border:1px solid #e1e1e1;
        display:flex;
        flex-direction:column;
        gap:0.5rem;
        background-color:white;
        `;


const ClockForm = ({ values = { title: '', timezone: 'UTC', offset: 0 }, handleClose, handleClock }) => {

    const [formValues, setFormValues] = useState({ ...values })


    useEffect(() => {
        if (TIMEZONE_OFFSET[formValues.timezone]) {
            setFormValues((prev) => ({
                ...prev,
                offset: TIMEZONE_OFFSET[formValues.timezone]
            }))
        }
    }, [formValues.timezone])

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name === 'offset') {
            value = Number(value) * 60;
        }

        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        handleClock(formValues)


    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    < Label htmlFor="title">Enter Title</Label>
                    <TextInput
                        id="title"
                        name="title"
                        value={formValues.title}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <Label htmlFor="timezone">Enter Timezone</Label>
                    <select
                        id="timezone"
                        name="timezone"
                        value={formValues.timezone}
                        onChange={handleChange}
                    >
                        <option value="GMT">GMT</option>
                        <option value="UTC">UTC</option>
                        <option value="PST">PST</option>
                        <option value="EST">EST</option>
                        <option value="EDT">EDT</option>
                        <option value="BST">BST</option>
                        <option value="MST">MST</option>
                    </select>
                </div>
                {(formValues.timezone === 'UTC' || formValues.timezone === 'GMT') && (

                    <div>
                        <Label htmlFor="offset">Enter Offset</Label>
                        <select
                            id="offset"
                            name="offset"
                            value={formValues.offset / 60}
                            onChange={handleChange}
                        >
                            {getOffsets().map((offset) => (

                                <option
                                    key={offset}
                                    value={offset}>
                                    {offset}
                                </option>
                            ))}
                        </select>
                    </div>

                )}
                <Button type="Submit" color="white">Submit</Button>
            </form>
        </Container>
    )
}

export default ClockForm