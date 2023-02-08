import styled from 'styled-components'

export const ClockShow = styled.div`
width:100%;
display: flex;
flex-direction: row; 
justify-content:center;
margin:${props => props.margin || "0"};
padding:${props => props.padding || "0"};
`