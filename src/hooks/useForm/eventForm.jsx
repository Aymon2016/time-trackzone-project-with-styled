import { useState } from "react"
import { generate } from 'shortid'
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

const EventForm = ({ values, handleClock, handleClose }) => {

    const [formValues, setFormValues] = useState({
        id: generate(),
        clockId: values,
        title: '',
        date: '',
        time: '',
        timezone: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target

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

                <Button type="Submit" color="white">Submit</Button>
            </form>
        </Container>
    )
}


export default EventForm