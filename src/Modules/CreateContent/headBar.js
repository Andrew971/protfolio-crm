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

 /* & div:last-child {
  text-decoration: underline;
  color:blue;
  cursor:pointer;
} */

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
  const {history,state:{displayField,field},onSaveContent} = props;
  const titleRef = React.useRef()
  // Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
      // console.log(mutation);
        if (mutation.type === 'childList') {
            // console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
          if(mutation.attributeName === "data-value"){
            // console.log(mutation);
            titleRef.current.innerHTML = mutation.target.value;
              // mutation.target.parentElement.classList.add('valid-input');
              // console.log('The ' + mutation.attributeName + ' attribute was modified.');

            }
        }
    }
};



React.useEffect(()=>{
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);
  const element = document.getElementById(displayField);
  // console.log(displayField)
// Start observing the target node for configured mutations
observer.observe(element, config);

return ()=>{
  observer.disconnect();

  }
},[config,displayField])


  const title = field[displayField] || "";
  return (
       <HeadBar direction="row">
          <TitleBar>
          <div onClick={()=>{
            history.goBack()
            }}>Back</div>
          <div ref={titleRef} className="headbar__title">{title.value}</div>
          </TitleBar>
          <SaveAndOptionBar>
          <div > Action</div>
          <div onClick={onSaveContent}>Save</div>
          </SaveAndOptionBar>
</HeadBar>  
  )
})

HeadBarContainer.propTypes = {}



export default withRouter(HeadBarContainer);
