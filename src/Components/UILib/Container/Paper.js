import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.div `
/* width:100%; */
display:flex;
flex-flow:column nowrap;
/* align-items:flex-start; */
justify-content:flex-start;
overflow-y:auto;
overflow-x:hidden;
padding:2vh;
background: smokewhite;
border-radius: 2vh;
height: auto;
width: 95%;
align-items: center;
${Media.desktop `
  /* display:none; */
`}
`;


export default Main