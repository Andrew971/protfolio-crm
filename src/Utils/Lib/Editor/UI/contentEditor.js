import styled from "styled-components";
import {Media} from './Config';



const ContentEditor = styled.div `
width:100%;
display:flex;
flex-flow:column nowrap;
align-items:flex-start;
justify-content:flex-start;
overflow-y:auto;
overflow-x:hidden;
height:100%;
min-height:40vh;
padding:5vh;
background: #fff;
/* border-radius: 5vh; */

& .codex-editor {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    width: 100%;

   & .ce-block__content {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
}
    & .ce-toolbar__content {
    max-width: 100%;
    margin: 0;
    position: relative;
}

& .codex-editor__redactor{
  padding:0 !important;
}
}


& h1 {
  font-size: 6rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.01562em;
    /* margin-bottom: 0.35em; */
}
& h2 {
  font-size: 3.75rem;
  font-family: inherit;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.00833em;
  /* margin-bottom: 0.35em; */
}
& h3 {
  font-size: 3rem;
  font-family: inherit;
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: 0em;
}
& h4 {
  font-size: 2.125rem;
  font-family: inherit;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.00735em;
    /* margin-bottom: 0.35em; */
}

& h5 {
  font-size: 1.5rem;
  font-family: inherit;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: 0em;
    /* margin-bottom: 0.35em; */
}

& h6 {
  font-size: 1.25rem;
  font-family: inherit;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
}


& p {
  font-size: 1rem;
  font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    /* margin: .5rem 0; */
}


${Media.desktop `
  /* display:none; */
`}
`;

export default ContentEditor;