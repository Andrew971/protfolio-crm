import React from 'react';
import styled from "styled-components";

const StyledSvg= styled.svg `
    width: ${props=>(props.size?`${props.size}rem`:"15rem")};
    max-width:${props=>(props.size?`${props.size}rem`:"5rem")};
    fill: currentColor;
    display: inline-block;
    user-select: none;
    flex-shrink: 0;
    margin:auto;
    padding:.5rem .5rem 0 .5rem;

    .b80583a2-8c0e-4508-846d-05cee963fc56{fill:#f78f1e;}.b80583a2-8c0e-4508-846d-05cee963fc56,.f6712a3c-e62d-443b-8957-bba50a5047ae{stroke:#2e3192;stroke-miterlimit:10;stroke-width:5px;}.be4477c7-ad5a-4cdf-824f-f7ee8574f800,.f6712a3c-e62d-443b-8957-bba50a5047ae{fill:#2d3a95;}.be4477c7-ad5a-4cdf-824f-f7ee8574f800{font-size:122px;font-family:Arial-Black, Arial Black;font-weight:800;}.aa68034f-2b09-4dd6-877c-53454c7e58ff{letter-spacing:-0.02em;}.a48ce4ab-bb6a-45e9-b2b8-4ca182b07bd8{letter-spacing:-0.07em;}
`;

const Logo = ({color,size}) => (<StyledSvg size={size} id="a39d508b-2252-430c-8765-d091f1427756" viewBox="0 0 1179 478.5"><title>logo-Promat-Inline</title><ellipse className="b80583a2-8c0e-4508-846d-05cee963fc56" cx="260.7" cy="231.2" rx="212.8" ry="131.2" transform="translate(-4 4.5) rotate(-1)"/><path className="f6712a3c-e62d-443b-8957-bba50a5047ae" d="M132.6,394.5c-8.7,0-12.3-5.1-12.3-13,0-16,25.7-55.6,34.4-70.8-8.7-5.5-16.3-12-16.3-23.2,0-21.1,42.8-30.9,54-36l63.3-80.7C194.6,165.9,140,199.3,129.3,200c-2.1,0-5.8-.4-5.8-3.6-25-47.3,255.1-97.4,267.1,1.8,7.9,64.8-88.9,114.5-199.1,119.7C184.7,318.2,141.7,394.5,132.6,394.5ZM236.1,246.3s28.3-5.1,28.3,1.8-24.1,8.6-33.7,11.7a8.3,8.3,0,0,0-4.3,3.3h0a8.2,8.2,0,0,0,5.5,12.6,114.1,114.1,0,0,0,25.2,1c71.1-3.9,119.7-56.1,110.6-77.4-6.4-14.9-57.7-27.6-79.3-24.7C283,175.3,242.5,245.1,236.1,246.3Z"/><text className="be4477c7-ad5a-4cdf-824f-f7ee8574f800" transform="translate(558.5 260.7)">P<tspan className="aa68034f-2b09-4dd6-877c-53454c7e58ff" x="88.1" y="0">R</tspan><tspan x="180.9" y="0">OM</tspan><tspan className="a48ce4ab-bb6a-45e9-b2b8-4ca182b07bd8" x="397.7" y="0">A</tspan><tspan x="484.2" y="0">T</tspan></text>
</StyledSvg>);

export default Logo
