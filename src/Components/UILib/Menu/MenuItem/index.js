import React from 'react';
import styled from "styled-components";
import {Media} from '../../Config';
// import {useLockBodyScroll,useOnClickOutside} from '../../Lib';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import iconList from '../Icon/export'
import {withRouter,NavLink} from 'react-router-dom';


const Container = styled(NavLink) `
display:flex;
  align-items:center;
  justify-content:flex-start;
padding:1rem;
height: 10vh;
text-decoration:none;
color:inherit;

&.is-active{
        color:#b38d51;

        & .menuItem_icon {
    color:rgba(0,0,0,1);

    & svg {
      /* width:2.5vw;
      height:2.5vw; */
    }
        }
  }

& .menuItem_icon {
    color:rgba(0,0,0,.5);
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-items: center;
    /* font-size: 2rem; */

    & svg {
      width:2.5vw;
      height:2.5vw;
    }

    & img {
      width: 100%;
    height: 100%;
    }
  }

  & .menuItem_textbox {
    padding: 1rem;
    width:100%;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:flex-start;
    overflow:hidden;

    & .menuItem_textbox__primary{
      font-size:1.3rem;
    }
    & .menuItem_textbox__secondary{
      font-size:0.5rem;
    }
  }
${Media.desktop `
  /* display:none; */
`}
`;


const MenuItem = React.memo((props) => {
  const {icon,
    primaryText,
    secondaryText,to } = props;

  // const modifyChildren = (child) => {

  //   const props = {
  //     className:"menuItem__element"
  //   };

  //   return React.cloneElement(child, props);
  // }

  return (<Container className={props.className} to={to} activeClassName="is-active" exact={true}>
    <div className="menuItem_icon">
            {icon && iconList[icon]
            ?<Icon name={icon} />
            :<img src={icon} alt={primaryText}/>

            }
            </div>
            <div className="menuItem_textbox">
            <div className="menuItem_textbox__primary">{primaryText} </div>
            {secondaryText&&
            <div className="menuItem_textbox__secondary">{secondaryText} </div>}
            </div>
      </Container>
  )
})


MenuItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(iconList))  
  ]),
};

export default withRouter(MenuItem);