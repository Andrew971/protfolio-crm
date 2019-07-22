import styled from "styled-components";
import {Media} from '../UILib/Config';



const ModuleNav = styled.div `
width:100%;
display:flex;
flex-flow:row nowrap;
align-items:center;
justify-content:space-evenly;
color:#222;
/* height:94.5vh; */
padding:2vh;

${Media.desktop `
  /* display:none; */
`}
`;


export default ModuleNav