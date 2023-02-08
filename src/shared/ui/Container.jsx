import styled from 'styled-components'

export const Container = styled.div`
  margin:${props => props.margin || "0"};
  padding:${props => props.padding || "0"};
  width:100%;
  height:100%;
  min-height: 100vh;
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  gap: 1rem;
  align-items: center;
  background-color: #645CBB;
  border:.1rem solid #A084DC;
 
}
  html{
    overflow-x: hidden;
     scroll-behavior: smooth;
}
  
`
