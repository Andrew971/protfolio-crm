import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.section `
width:100%;
display:flex;

flex-flow:${props=>props.direction?`${props.direction} nowrap`:'column nowrap'};
/* align-items:flex-start; */
justify-content:flex-start;
/* overflow-y:auto;
overflow-x:hidden; */
height:100%;
padding:${props=>props.padding?'2vh':'0'};
align-items: flex-start;

${Media.desktop `
  /* display:none; */
`}
`;


export default Main