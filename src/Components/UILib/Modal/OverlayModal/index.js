import React from 'react';
import styled from "styled-components";
import {Media} from '../../Config';
import {useLockBodyScroll,useOnClickOutside} from '../../Lib';



const Container = styled.div `
background-color:rgba(0,0,0,0.5); 
height: 100vh; /* 100% Full-height */
width:100vw;
position:absolute;
top:0;
z-index:11;
display: flex;
    justify-content: center;
    align-items: center;
will-change: transform, opacity;
transition: opacity .6s ease-out, transform 0s .6s ease-out;


${Media.desktop `
  /* display:none; */
`}
`;

const Drawer = styled.div `
height: 40vh; /* 100% Full-height */
width:50vw;
/* position: fixed;  */
z-index:11;
top: 0;
right:0;
background-color: #fff; 
/* background-color: lightgrey; Black */
overflow-x: hidden; /* Disable horizontal scroll */
padding: 2vh 0; /* Place content 60px from the top */
transition: width .5s; /* 0.5 second transition effect to slide in the sidenav */
color:black;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);


@media (max-width: 660px) {
  padding-top: 15px;

  a {font-size: 18px;}
}

${Media.desktop `
  /* display:none; */
`}

  `;


export default React.memo((props) => {
  const { open,onClose,direction,distance } = props;
  const drawerRef = React.useRef();
  const containerRef = React.useRef()

  useLockBodyScroll(open);
  
  useOnClickOutside(drawerRef,containerRef, (e) =>{
    // const container = containerRef.current;
    // container.classList.remove('show',false)
    onClose()
  } 
  );

  // useEventListener('click',()=>onClose(),drawerRef);

  const showDrawerWithOverlay = React.useCallback((condition)=>{
    const container = containerRef.current;

    if(condition){
      // console.log('open')
      container.classList.toggle('show',true)
    }else{
      // console.log('close')
      container.classList.toggle('show',false)
    }
    
    },
    [],
    );

  React.useEffect(()=>{
    // showDrawerWithOverlay(open)

  },[open,showDrawerWithOverlay])


  const modifyChildren = (child) => {
    // console.log(child)
    const props = {
      className:"drawer__menuItem"
      
    };

    return React.cloneElement(child, props);
  }

  return (
        <Container id="overlay" ref={containerRef} direction={direction} distance={distance}>
      <Drawer {...props} ref={drawerRef}>
        {
          React.Children.map(props.children, (child) =>  modifyChildren(child))
        }
      </Drawer>
      </Container>
  )
})

