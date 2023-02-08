
import styled from 'styled-components'

export const ClockShow = styled.div`
width:${props => props.width || "345px"};
display: flex;
flex-direction: column;
gap: 1rem;
border-redius:10px;
box-shadow:.4rem .4rem 1rem #111,
                -.4rem -.4rem 1rem #333;
box-shadow-inset:.4rem .4rem 1rem #111 inset,
                      -.4rem -.4rem 1rem #333 inset;
align-items: center;
margin:${props => props.margin || "0"};
padding:${props => props.padding || "0"};
`