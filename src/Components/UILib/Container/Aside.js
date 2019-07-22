import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.aside `
width:${props=>props.width?`${props.width}`:'100%'};
display:flex;
flex-flow:column nowrap;
/* align-items:flex-start; */
justify-content:flex-start;
/* overflow-y:auto;
overflow-x:hidden; */
height:100%;
padding:2vh;

    align-items: center;
${Media.desktop `
  /* display:none; */
`}
`;


export default Main