import styled,{css} from "styled-components";
import {Media} from '../Config';



const SimpleButton =  styled.button`

  display: flex;
  width:100%;
  margin:1em;
  padding: 1em;
  justify-content:center;
  align-items:center;
  border:0;
  border-radius:5rem;
  font-size:1em;
  margin:2em 1em;
  outline:none;
  will-change:filter ;
  transition:background 2s ease-in-out:
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  ${props=>props.primary?css`
  background: rgb(255,106,0);

background: -moz-linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
background: linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6a00",endColorstr="#ffa143",GradientType=1);
color:white;

`:css`
background: rgb(244,241,239);
background: -moz-linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
background: linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4f1ef",endColorstr="#ffffff",GradientType=1);

color:#222;

`}


&:hover {
  cursor:pointer;
  box-shadow:none;
  ${props=>props.primary?css`
  background: rgb(255,106,0);
background: -moz-linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
background: linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,161,67,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6a00",endColorstr="#ffa143",GradientType=1);
color:white;
filter: brightness(.9);
  transition: filter .2s ease-in-out;
  
`:css`
background: rgb(244,241,239);
background: -moz-linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
background: linear-gradient(90deg, rgba(244,241,239,1) 75%, rgba(255,255,255,1) 100%);
filter: brightness(.9);
	transition: filter .2s ease-in-out;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4f1ef",endColorstr="#ffffff",GradientType=1);

color:#222;

`}

& :focus {
  outline:none;
}

}
${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;

  export default SimpleButton