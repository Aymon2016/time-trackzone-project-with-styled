import styled from 'styled-components'

export const ClockShow = styled.div`

display: flex;
flex-direction: row; 
justify-content:center;
margin:${props => props.margin || "5px"};
padding:${props => props.padding || "5px"};
`