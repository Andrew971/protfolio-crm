import React from 'react';
// import PropTypes from 'prop-types';
import {Container,Content,NavItems,NavDisplay} from './styles';
import DrawerOverlay  from '../DrawerOverlay';
import Icon from '../../Icon'
import {useEventListener} from '../../Lib'

const Navbar =  React.memo((props) => {
  const containerRef = React.useRef()
  const { logo,drawerStyle,scrollTrigerValue } = props;
  const [ state, setState ] = React.useState({
    isSideMenuOpen: false,
    isScrolling: false,

  })
  const toggleSideMenuOpen = () =>{ 
    setState((prevState) => {

    return {
      ...prevState,
      isSideMenuOpen: !prevState.isSideMenuOpen
    }
  })
}

  // React.useEffect(()=>{
  //   window.addEventListener('scroll', changeNavBarBackground)

  //   return () => {
  //     window.removeEventListener('scroll', changeNavBarBackground)

  //   }
  // },[state.isScrolling])

  const changeNavBarBackground = (e) => {
    const {isScrolling} = state;
    let scroll = e.target.documentElement.scrollTop || e.target.body.scrollTop
    
    if (scroll >= scrollTrigerValue && !isScrolling) {
      setState({isScrolling: true})
      return;
    } else if (scroll <= scrollTrigerValue && isScrolling) {
      setState({isScrolling: false})
      return;
    } else {
      return;
    }
  
  }

  useEventListener('scroll', changeNavBarBackground)


  // React.useEffect(()=>{
  //   const {isScrolling} = state;
  //   const scroll = document.scrollingElement.scrollTop ;
  //   if (scroll >= scrollTrigerValue && !isScrolling) {
  //     setState({isScrolling: true})
  //   }
    
  // },[state]);

const {isSideMenuOpen} = state;
  const modifyChildren = (child) => {

    const props = {
      className:"test"
    };

    return React.cloneElement(child, props);
  }


  return (      
  <React.Fragment>

    <Container ref={containerRef}  isScrolling={state.isScrolling}
{...props}>
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
        <Icon name="simple-hamburger" open={isSideMenuOpen} onClick={() => toggleSideMenuOpen()} isScrolling={state.isScrolling}/>
        <DrawerOverlay
            open={isSideMenuOpen}
            width={80}
            distance={100}
            direction="left"
            onClose={toggleSideMenuOpen}
            drawerStyle={drawerStyle}
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