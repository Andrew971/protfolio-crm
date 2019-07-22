import styled from "styled-components";
import {Media} from './Config';



export const Container = styled.div `
width:100%;
display:flex;
flex-flow:column nowrap;
align-items:flex-start;
justify-content:flex-start;
/* overflow-y:auto; */
overflow-x:hidden;
height:100%;
min-height:50vh;
padding:5vh;
background: #eef5fa;
border-radius: 5vh;

${Media.desktop `
  /* display:none; */
`}
`;
export default Container;