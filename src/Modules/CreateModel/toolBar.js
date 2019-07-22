import React from 'react'
// import PropTypes from 'prop-types'
import { Aside} from '../../Components/UILib/Container';
import { Droppable, Draggable} from 'react-beautiful-dnd';
import styled from "styled-components";


const Item = styled.div `
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
`;

const Clone = styled(Item)`
~ div {
  transform: none!important;
}
`;


const ToolBar = React.memo((props) =>{
  const { contentModel } = props;
  return (
          <Droppable droppableId="contentModelType" isDropDisabled={true}>
            {(provided, snapshot) => (
              <Aside
                width="30vw"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}>
                {contentModel.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <React.Fragment>
                        <Item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}>
                          {item.type}
                        </Item>
                        {snapshot.isDragging && (
                          <Clone>{item.type}</Clone>
                        )}
                      </React.Fragment>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </Aside>
            )}
          </Droppable>
  )
})

ToolBar.propTypes = {}



export default ToolBar;
