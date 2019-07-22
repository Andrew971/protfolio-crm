import React from 'react';
import styled,{css} from "styled-components";
import {Media} from '../../Config';
import {useLockBodyScroll,useEventListener,useOnClickOutside} from '../../Lib';



const Container = styled.div `
background-color:rgba(0,0,0,0.5); 
height: 100vh; /* 100% Full-height */
width:100vw;
position:absolute;
top:0;
z-index:9;
${props=>props.direction === "right"
  ?css`
    left: 0;
  `
  :props.direction === "left"
    ?css`
      right: 0;
    `
    :css`
      left: 0;
    `
}
will-change: opacity;
/* transition: opacity .6s .2s ease-out, transform 0s .6s ease-out; */
opacity:0;
/* ${props=>props.direction === "right"
  ?css`
  transform: translateX(-${props.distance}vw);
  `
  :props.direction === "left"
    ?css`
      transform: translateX(${props.distance}vw);
    `
    :css`
      transform: translateX(-${props.distance}vw);
    `
  } */
  display:none;
  /* transition: opacity .5s .5s ease-in; */

&.show {
  display:block;
  transition: opacity .5s ease-in;
  /* will-change: transform, opacity; */
  /* transform: translateX(0vw) ; */
  opacity:1
  
}


${Media.desktop `
  /* display:none; */
`}
`;

const Drawer = styled.div `
height: ${props=>props.theme.appBarHeight?`calc(100vh - ${props.theme.appBarHeight})`:'94vh'}; /* 100% Full-height */
width:${props=>props.open?'20vw':'5vw'};
/* position: fixed;  */
z-index:9;
bottom: 0;

${props=>props.direction === "right"
  ?css`
  left: 0;
  /* transform: ${props.open?`transform:translateX(0vw)`:`translateX(-${props.distance }vw)`}; */
  `
  :props.direction === "left"
    ?css`
      right: 0;
      /* transform: ${props.open?`transform:translateX(0vw)`:`translateX(${props.distance}vw)`}; */

    `
    :css`
      left: 0;
      /* transform: ${props.open?`transform:translateX(0vw)`:`translateX(-${props.distance}vw)`}; */
    `
  
}
background-color: #fff; 
/* background-color: lightgrey; Black */
overflow-x: hidden; /* Disable horizontal scroll */
padding: 2vh 0; /* Place content 60px from the top */
transition: width .5s; /* 0.5 second transition effect to slide in the sidenav */
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

/* a {
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.3s;
}
a:hover{
    color: #f1f1f1;
}

a:hover {
  text-decoration: none;
} */


& .drawer__menuItem{
  ${props=>props.direction === "right"
  ?css`
    flex-flow:row-reverse nowrap;
  `
  :props.direction === "left"
    ?css`
    flex-flow:row nowrap;

    `
    :css`
    flex-flow:row nowrap;
    `
};

  & div:first-child {
  
  }

  & div:last-child {
    visibility:${props=>props.open?'none':'hidden'};
    transition: opacity .2s .2s ease-in-out;
    opacity:${props=>props.open?'1':'0'};
  }

}

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
  
  useOnClickOutside(drawerRef,containerRef, () =>{
    // const container = containerRef.current;
    // container.classList.remove('show',false)
    onClose()
  } 
  );

  useEventListener('click',()=>onClose(),drawerRef);

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
    showDrawerWithOverlay(open)

  },[open,showDrawerWithOverlay])


  const modifyChildren = (child) => {
    // console.log(child)
    const props = {
      className:"drawer__menuItem"
      
    };

    return React.cloneElement(child, props);
  }

  return (<React.Fragment>
        <Container id="overlay" ref={containerRef} direction={direction} distance={distance}/>
      <Drawer {...props} ref={drawerRef}>
        {
          React.Children.map(props.children, (child) =>  modifyChildren(child))
        }
      </Drawer>
      </React.Fragment>
  )
})


// [et_pb_section fullwidth="on" specialty="off"][et_pb_fullwidth_slider admin_label="Fullwidth Slider" show_arrows="on" show_pagination="on" auto="off" parallax="off" parallax_method="off"][et_pb_slide background_image="http://www.lingo-star.com/livesite/wp-content/uploads/2014/12/Vancouverr.jpg" background_color="#ffffff" alignment="center" background_layout="dark" /][/et_pb_fullwidth_slider][/et_pb_section]

// [et_pb_row][et_pb_column type="4_4"][/et_pb_column][/et_pb_row]
// [et_pb_row][et_pb_column type="4_4"][/et_pb_column][/et_pb_row]

