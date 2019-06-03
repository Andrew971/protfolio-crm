import styled,{css} from "styled-components";
import {Media} from '../../Config';

export const Container = styled.nav `
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: ${props=>props.navHeight?props.navHeight:'10vh'};
  width:100vw;
  padding:.5em;
  position:fixed;
  top:0;
  left:0;
  background: rgb(92,150,255);
background: linear-gradient(90deg, rgba(92,150,255,1) 0%, rgba(0,189,255,1) 100%);  
  ${props=> props.theme?css`
    color:${props.isScrolling
    ?props.theme.navBar.color.secondary
    :props.theme.navBar.color.primary};
    /* background:${props.isScrolling
    ?props.theme.navBar.background.secondary
    :props.theme.navBar.background.primary}; */
  `:css`
    color:${props.isScrolling
    ?"#222"
    :"#fff"};
    /* background:${props.isScrolling?
    "#fff"
    :"transparent"}; */
  `};

  transition: background 250ms ease-in-out;
  z-index:100;
  
  & .navbar__mobile_menu{
      display:none;
    }

  ${Media.phone `


  `}


`;

export const Content = styled.div `

    
    width:${props=> props.theme.containerWidth
    ?props.theme.containerWidth
    :"70vw"};
    max-width:${props=> props.theme.containerWidth
    ?props.theme.containerWidth
    :"70vw"};
    height:100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-flow:row nowrap;
    flex-flow:row nowrap;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;

    & .navbar__logo{
      
    }
    
    & .navbar__menu{
      display:flex;
      width:50%;
      height:100%;
      flex-flow:row nowrap;
      justify-content:space-between;
      align-items:center;
    }

  ${Media.phone `
    
    width:90vw;
    max-width:90vw;
    height:100%;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-flow:row nowrap;
    flex-flow:row nowrap;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    padding: 1rem 0;

    & .navbar__logo{
     & svg {
      width:10rem;
     }
    }
    
    & .navbar__menu{
      display:none;
    }

    & .navbar__mobile_menu{
      display:none;
    }

  `}

`;



const NavItemMobile = css`
& a {
text-decoration:none;
color:inherit;
font-weight: 500;
letter-spacing: .05rem;
padding:1em;
border-radius:.7em;

${props=> props.theme?css`
  &:hover{
    color:${props.theme.navBar.color.hover};
    /* background:${props.theme.navBar.background.hover}; */
    font-weight: 600;

  }

  &.is-active{
    color:${props.theme.navBar.color.isActive};
    /* background:${props.theme.navBar.background.isActive}; */

  }

`:css`
  &:hover{
      color:red;
    }

    &.is-active{
      color:#b38d51;
    }

`};

}

  `;

const NavItemDesktop = css`
 & a {
  text-decoration:none;
  color:inherit;
  font-weight: 500;
  letter-spacing: .05rem;
  padding:1em;
  border-radius:.7em;

  ${props=> props.theme?css`
    &:hover{
      color:${props.theme.navBar.color.hover};
      /* background:${props.theme.navBar.background.hover}; */
      font-weight: 600;

    }

    &.is-active{
      color:${props.theme.navBar.color.isActive};
      background:${props.theme.navBar.background.isActive};

    }

  `:css`
    &:hover{
        color:red;
      }

      &.is-active{
        color:#b38d51;
      }

  `};
  
  }

  `;

export const NavItems = styled.div `
  cursor:pointer;

  ${Media.desktop `
    ${NavItemDesktop}
  `}
  ${Media.laptop `
    ${NavItemDesktop}
  `}

  ${Media.tablet `
    ${NavItemMobile}
  `}
  
  ${Media.phone `
    ${NavItemMobile}
  `}


`;


const ItemsDevice = (device) => css`
${Media[device]`
  display:none;
`}
`;

const DisplayMobile = css`
    display:flex;
    justify-content:flex-end;
    flex: 1 0 auto;
    flex-flow: row nowrap;

  & > div[id="icon"]:hover > div .dropdown, & div[id="icon"]:focus > div .dropdow{
  display:block;
  }
    
${ItemsDevice('laptop')};
${ItemsDevice('desktop')};

  `;

const DisplayDesktop = css`
    display:flex;
    justify-content:space-between;

    ${props=>props.width&&css`
      width:props.width;
    `}
    flex-flow: row nowrap;
    /* & > div {
      display:flex;
      justify-content:space-between;
    } */

    

${ItemsDevice('phone')}
${ItemsDevice('tablet')}

  `;

export const NavDisplay =  styled.div`
  ${props=>props.desktop&&DisplayDesktop};
  ${props=>props.mobile&&DisplayMobile};

`;

