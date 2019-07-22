import styled from "styled-components";
import {Media} from '../Config';



const AppContainer = styled.div `
display:flex;
flex-flow:${props=>props.reverse?`row-reverse nowrap`:'row nowrap'};
align-items:flex-start;
justify-content:flex-start;
overflow:hidden;
height:100%;
/* flex-grow:1; */

${Media.desktop `
  /* display:none; */
`}
`;


export default AppContainer