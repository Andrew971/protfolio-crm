import styled, {keyframes,css} from "styled-components";
import {Media} from '../../Config';

const progressiveReveal = keyframes`
	0% { transform: scale(1.05); opacity: 0; }
	100% { transform: scale(1); opacity: 1; }
`;


export const StyledCard =  styled.header`

  display: flex;

  position:${props=>props.isSpecial?'relative':"unset"};
  width: ${props=>props.width?props.width:'100%'};
  height: ${props=>props.height?props.height:'100%'};
  border: 0 none;
  overflow:hidden;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${props=>props.navHeight? `${props.navHeight} 1rem 1rem 1rem`:'10vh 1rem 1rem 1rem'};

  /* transform: skewY(-6deg);
  transform-origin: top left; */
  ${props=>!props.isSpecial && css`
  background-color:lightgrey;
  `}

  ${props=>props.clipPath &&`
  clip-path: ${props.clipPath.shape};
  margin:${props.clipPath.margin};
  `}

${props=>props.containerStyle && props.containerStyle}

${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;

export const StyledLink =  styled.a`

  /* position: relative; */
  display: block;
  overflow: hidden;
  outline: none;
  width:100%;
  height:100%;
  position: absolute;
    top:0;
    left:0;
    z-index:-1;
  ${props=>props.skew
  ?`
  transform: skew(${props.skew.degree});
  transform-origin: ${props.skew.origin};
  `
  :null
  }
  ${props=>props.rounded
  ?`
  border-bottom-left-radius: ${props.skew.left};
  border-bottom-right-radius: ${props.skew.righ};
  `
  :null
  }

&:not(.replace) {
  cursor: default;
}

& img {
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;
  object-fit: cover;
  object-position: 50% 50%;
}

& img.preview {
  filter: blur(2vw);
  transform: scale(1.05);
}

& img.reveal {
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform, opacity;
  animation: ${progressiveReveal} 1s ease-out;
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


export const StyledImage =  styled.img`
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;
  object-fit: cover;
  object-position: 50% 50%;



${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;


export const ShapeContainer = styled.div`
 display: block;
  overflow: hidden;
  outline: none;
  width:100%;
  height:100%;
  position: absolute;
    top:0;
    left:0;
    /* z-index:1; */
    ${props=>props.shapeStyle && props.shapeStyle}


  ${props=>props.skew
  ?`
  transform: skewY(${props.skew.degree});
  transform-origin: ${props.skew.origin};
  `
  :null
  }
  ${props=>props.rounded
  ?`
  border-bottom-left-radius: ${props.skew.left};
  border-bottom-right-radius: ${props.skew.righ};
  `
  :null
  }
`;

export const SvgContainer = styled.svg`
position: absolute;
width: 100%;
height: ${props=>(props.size?props.size:"10vh")};
${props=>props.svg.postion === "top"?css`
top:0
`
:css`
bottom:0
`}

${props=>props.svg.css && props.svg.css}


`;