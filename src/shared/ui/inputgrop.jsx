

import styled from 'styled-components';
import Label from './label';
import TextInput from './textInput'



const Container = styled.div`
width:100%;
padding:1rem;
border:1px solid #e1e1e1;
display:flex;
flex-direction:column;
gap:0.5rem;
`;
const ErrorMessage = styled.div`
font-size:0.8rem;
color:red;
`;


const InputGroup = ({
    label,
    name,
    value,
    placeholder,
    error,
    onChange,
    onFocus,
    onBlur, }) => {
    return (
        <Container>
            <Label htmlFor='{name}'>{label}</Label>
            <TextInput
                name={name}
                id={name}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error={error}
            ></TextInput>

            {error && <ErrorMessage>{error}</ErrorMessage>}

        </Container>
    )
}

export default InputGroup
