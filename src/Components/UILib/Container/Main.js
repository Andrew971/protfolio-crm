import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.main `
width:100%;
display:flex;
flex-flow:column nowrap;
/* align-items:flex-start; */
justify-content:flex-start;
overflow-y:scroll;
overflow-x:hidden;
height:${props=>props.theme.appBarHeight?`calc(100vh - ${props.theme.appBarHeight})`:'94vh'};;
/* padding:2vh; */

    align-items: center;
${Media.desktop `
  /* display:none; */
`}
`;


export default Main