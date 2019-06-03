import React from 'react';
// import PropTypes from 'prop-types';
import {Container,Content,NavItems,NavDisplay} from './styles';
import DrawerOverlay  from '../DrawerOverlay';
import Icon from '../../Icon'


const Navbar =  React.memo((props) => {
  const containerRef = React.useRef()
  const { logo } = props;
  const [ state, setState ] = React.useState({
    isSideMenuOpen: false,
  })
  const toggleSideMenuOpen = () =>{ 
    setState((prevState) => {

    return {
      isSideMenuOpen: !prevState.isSideMenuOpen
    }
  })
}
const {isSideMenuOpen} = state;
  const modifyChildren = (child) => {

    const props = {
      className:"test"
    };

    return React.cloneElement(child, props);
  }

  return (      
  <React.Fragment>

    <Container ref={containerRef} {...props}>
      <Content>
        <div>
        {logo}
        </div>
        <NavDisplay desktop width="90%">
        {
          React.Children.map(props.children, (child) => <NavItems> {modifyChildren(child)}</NavItems>)
        }
        </NavDisplay>
        <NavDisplay mobile>
        <Icon name="simple-hamburger" open={isSideMenuOpen} onClick={() => toggleSideMenuOpen()}/>
        <DrawerOverlay
            open={isSideMenuOpen}
            width={80}
            distance={100}
            direction="left"
            onClose={toggleSideMenuOpen}
            >
            {
          React.Children.map(props.children, (child) => <NavItems> {modifyChildren(child)}</NavItems>)
        }
      </DrawerOverlay>
        </NavDisplay>

      </Content>
    </Container>
      </React.Fragment>
  )
})


Navbar.propTypes = {}

// Table.defaultProps = {   pattern: {} };


export default Navbar;