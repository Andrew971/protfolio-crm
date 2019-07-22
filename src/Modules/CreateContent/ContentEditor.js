import React from 'react'
// import PropTypes from 'prop-types'
import {Section} from '../../Components/UILib/Container';
// import styled from "styled-components";
// import Editor from '../../Utils/Lib/Editor'
// import {TextField} from '../../Components/UILib/Input'; 
// import Icon from '../../Components/UILib/Icon'
import ContentField from './contentField';

// const Item = styled.div `
// display: flex;
// user-select: none;
// padding: 0.5rem;
// margin: 0 0  0.5rem 0;
// align-items: center;
// justify-content: space-between;
// line-height: 1.5;
// border-radius: 3px;
// background: #fff;
// border: 1px ${props => (props.isDragging
//   ? 'dashed #000'
//   : 'solid #ddd')};
//     width: 100%;

//   & .field__content{
//     display:flex;
//     flex-flow:row nowrap;
//     align-items:center;
//     justify-content:space-between;

//     & .field__content__name{
//       padding:1rem;
//       color:black;
//       font-size:1.5rem;
//     }
//     & .field__content__type{
//       padding:1rem;
//       color:rgba(0,0,0,0.5);
//       font-size:1rem;

//     }
//   }
//   & .field__setting{
//     display:flex;
//     flex-flow:row nowrap;
//     align-items:center;
//     justify-content:space-between;
//     text-decoration: underline;
//     color:blue;
//     cursor:pointer;
//   }
// `;

// const Handle = styled.div `
// display: flex;
// align-items: center;
// align-content: center;
// user-select: none;
// margin: -0.5rem 0.5rem -0.5rem -0.5rem;
// padding: 0.5rem;
// line-height: 1.5;
// border-radius: 3px 0 0 3px;
// background: #fff;
// border-right: 1px solid #ddd;
// color: #000;
// `;

// const Notice = styled.div `
// display: flex;
// align-items: center;
// align-content: center;
// justify-content: center;
// padding: 0.5rem;
// margin: 0 0.5rem 0.5rem;
// border: 1px solid transparent;
// line-height: 1.5;
// color: #aaa;
// `;

// const DropZoneSection = styled.section `
// width:40vw;
// display:flex;

// flex-flow:${props => props.direction
//   ? `${props.direction} nowrap`
//   : 'column nowrap'};
// /* align-items:flex-start; */
// justify-content:flex-start;
// /* overflow-y:auto;
// overflow-x:hidden; */
// min-height:20vh;
// padding:${props => props.padding
//     ? '2vh'
//     : '0'};
// align-items: center;
// border:${props => Object.entries(props.state.field).length === 0
//       ? '1px dashed rgba(0,0,0,.5)'
//       : props.isDraggingOver
//         ? '1px dashed rgba(0,0,0,.5)'
//         : 0};

// `;

const ContentEditor = React.memo(React.forwardRef((props,ref) => {
  const {state,setStateRef} = props;

 
  // console.log(state)
  return (
    <Section padding>
      {Object.entries(state.field).map(([key,field],index)=>{

        return (
          <ContentField ref={ref} key={index+key} id={key} state={field} setStateRef={setStateRef}/>
          
        )
      })}
      

    </Section>
  )
}))

ContentEditor.propTypes = {}

export default ContentEditor;
