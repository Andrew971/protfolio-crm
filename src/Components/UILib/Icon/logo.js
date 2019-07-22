import React from 'react';
import styled from "styled-components";

const StyledSvg = styled.svg `
    width: ${props => (props.size
  ? `${props.size}rem`
  : "15rem")};
    max-width:${props => (props.size
  ? `${props.size}rem`
  : "5rem")};
    fill: currentColor;
    display: inline-block;
    user-select: none;
    flex-shrink: 0;
    margin:auto;
    padding:.5rem .5rem 0 .5rem;

    .b50cdd71-9c3e-4d35-be31-c9cc958b1376{fill:#f78f1e;}.a6985abd-8545-45bf-94d0-3556a2735d6c,.b50cdd71-9c3e-4d35-be31-c9cc958b1376{stroke:#2e3192;stroke-miterlimit:10;stroke-width:5px;}.a6985abd-8545-45bf-94d0-3556a2735d6c,.ad474d1a-7daa-4ea3-9451-e931a063a61e{fill:#2d3a95;}.ad474d1a-7daa-4ea3-9451-e931a063a61e{font-size:122px;font-family:Arial-Black, Arial Black;font-weight:800;}.a01f1e9e-79d7-456f-a8c7-cbc5c5f0c171{letter-spacing:-0.02em;}.aa548693-0433-47b5-864c-f35f9e0c7ce4{letter-spacing:-0.07em;}
`;

const Logo = ({color, size}) => (
  <StyledSvg
    size={size}
    id="a39d508b-2252-430c-8765-d091f1427756"
    viewBox="0 0 944.8 726.5">
    <title>logo-Promat</title><ellipse className="b50cdd71-9c3e-4d35-be31-c9cc958b1376" cx="464" cy="259.9" rx="212.8" ry="131.2" transform="matrix(1, -0.02, 0.02, 1, -4.42, 8.05)"/><path className="a6985abd-8545-45bf-94d0-3556a2735d6c" d="M335.9,423.2c-8.7,0-12.4-5.1-12.4-13.1,0-16,25.8-55.5,34.5-70.8-8.7-5.4-16.3-11.9-16.3-23.2,0-21,42.8-30.8,54-35.9l63.2-80.8c-61-4.8-115.6,28.5-126.3,29.2-2.2,0-5.8-.3-5.8-3.6-25-47.3,255-97.3,267.1,1.8,7.9,64.9-88.9,114.5-199.1,119.7C388,346.9,344.9,423.2,335.9,423.2ZM439.3,274.9s28.3-5.1,28.3,1.8-24,8.6-33.7,11.8a7.8,7.8,0,0,0-4.2,3.2h0a8.1,8.1,0,0,0,5.5,12.6,114.1,114.1,0,0,0,25.2,1.1c71.1-4,119.7-56.1,110.5-77.5-6.3-14.8-57.6-27.6-79.2-24.7C486.3,204,445.8,273.8,439.3,274.9Z"/><text className="ad474d1a-7daa-4ea3-9451-e931a063a61e" transform="translate(172.8 601.6)">P<tspan className="a01f1e9e-79d7-456f-a8c7-cbc5c5f0c171" x="88.1" y="0">R</tspan><tspan x="180.9" y="0">OM</tspan><tspan className="aa548693-0433-47b5-864c-f35f9e0c7ce4" x="397.7" y="0">A</tspan><tspan x="484.2" y="0">T</tspan></text>
  </StyledSvg>
);

export default Logo
