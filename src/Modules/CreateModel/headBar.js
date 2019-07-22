import React from 'react'
// import PropTypes from 'prop-types'
import {HeadBar} from '../../Components/UILib/Container';
import styled from "styled-components";
import {withRouter} from 'react-router-dom';


const TitleBar = styled.section `
display: flex;
padding: 2vh;
flex-flow: row nowrap;
justify-content:flex-start;
align-items:flex-end;

 & div {
  margin: 0 .5rem 0 0;
  padding:1rem;

}
 & div:first-child {
  text-decoration: underline;
  color:blue;
  cursor:pointer;
}

 & div:last-child {
  text-decoration: underline;
  color:blue;
  cursor:pointer;
}

& .headbar__title{
  font-size:2rem;
  line-height: 1em;
}
& .headbar__description{
  color:rgba(0,0,0,0.5)
}
`;

const SaveAndOptionBar = styled.section `
display: flex;
padding: 2vh;
flex-flow: row nowrap;
justify-content:flex-end;
align-items:center;

& div {
  margin: 0 .5rem 0 0;
  padding:1rem;

}

`;




const HeadBarContainer = React.memo((props) =>{
  const {history,state:{name,description},onEdit} = props;

  return (
       <HeadBar direction="row">
          <TitleBar>
          <div onClick={()=>{
            history.goBack()
            }}>Back</div>
          <div className="headbar__title">{name}</div>
          {description && 
          <div className="headbar__description">{description}</div>
          }
          <div onClick={onEdit}>edit</div>
          </TitleBar>
          <SaveAndOptionBar>
          <div>Action</div>
          <div>Save</div>
          </SaveAndOptionBar>
</HeadBar>  
  )
})

HeadBarContainer.propTypes = {}



export default withRouter(HeadBarContainer);
