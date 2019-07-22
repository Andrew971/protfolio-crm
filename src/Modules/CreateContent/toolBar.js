import React from 'react'
// import PropTypes from 'prop-types'
import { Aside} from '../../Components/UILib/Container';
import styled from "styled-components";


const Item = styled.button `
display: flex;
user-select: none;
padding: 0.5rem;
margin: 0 0  0.5rem 0;
align-items: flex-start;
align-content: flex-start;
line-height: 1.5;
border-radius: 3px;
background: #fff;
border: 1px ${props => (props.isDragging
  ? 'dashed #000'
  : 'solid #ddd')};
    width: 100%;
    cursor:pointer;
`;

// const Clone = styled(Item)`
// ~ div {
//   transform: none!important;
// }
// `;


const ToolBar = React.memo((props) =>{
  const { onSaveContent } = props;
  return (
         
              <Aside
                width="30vw"
              >
                <Item onClick={onSaveContent}>Save</Item>
              
              </Aside>
          
  )
})

ToolBar.propTypes = {}



export default ToolBar;
