import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.section `
width:100%;
display:flex;

flex-flow:${props=>props.direction?`${props.direction} nowrap`:'column nowrap'};
/* align-items:flex-start; */
justify-content:space-between;
/* overflow-y:auto;
overflow-x:hidden; */
height:10vh;
padding:${props=>props.padding?'2vh':'0'};
align-items: center;

${Media.desktop `
  /* display:none; */
`}
`;


export default Main