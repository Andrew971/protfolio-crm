import React from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
// import {Media} from '../../Config';
import ErrorIcon from '../icon/error'
// import {useInputValidation,useEventListener} from '../../Lib';
import { Container,ContainerField,ContainerInput,StyledInput} from './styles'
import { applyFieldStyle, setWordCount} from './method'
import useTextFieldState from './hook'

const TextField = React.memo(React.forwardRef((props, ref) => {
  const {
    type,
    label,
    helperText,
    placeholder,
    max,
    icon,
    position,
    required,
    pattern={},
    errorMessage,
    withWordCounter,
    ...restProps
  } = props;

const inputContainerRef= React.useRef();
const { state, action} = useTextFieldState({
  isError:false,
  errorMessage,
  wordCount:0
})
// console.log(state)
function onChangeHandler (event) {
  applyFieldStyle(event,state,action,props)
  setWordCount(event,state,action,props)
}

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            if(mutation.attributeName === "value"){
              // console.log(mutation);
              mutation.target.parentElement.classList.add('valid-input');
              // console.log('The ' + mutation.attributeName + ' attribute was modified.');

            }
        }
    }
};



React.useEffect(()=>{
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);
  const element = inputContainerRef.current;

// Start observing the target node for configured mutations
observer.observe(element, config);

return ()=>{
  observer.disconnect();

  }
},[config])

React.useEffect(()=>{
  const element = inputContainerRef.current;
  if(element.getElementsByTagName('input')[0].defaultValue !== ""){
    element.classList.add('valid-input');
  }
return ()=>{

  }
},[])

  // console.log('pattern',pattern)
  return(
    <Container>
    <ContainerField position={icon && position} onChange={onChangeHandler}>
      {
        icon && position !== "start"
        ? null
        :(<div className="textfield_icon--leading">
          {icon}
        </div>)
      }
      <ContainerInput ref={inputContainerRef} >
      <StyledInput 
        ref={ref} 
        type={type} 
        placeholder={placeholder}
        maxLength={max}
        required={required}
        {...restProps}
      />
      <label>{label}</label>
      </ContainerInput>
      {
        icon && (!state.isError && position === "end")
        ? (<div className="textfield_icon--leading">
          {icon}
        </div>)
        :null
      }
      {state.isError &&
        <div className="textfield_icon--error">
          <ErrorIcon />
        </div>
      }
      </ContainerField>
      <div className="textfield-secondary-box">
      {!state.isError
        ?(<span className="textfield-helper-text">{helperText}</span>)
        :(<span className="textfield-error-text">{
          errorMessage
          ?errorMessage
          :(pattern.maxLength || max)
            ?`your ${label} is too long`
            :`Sorry your ${label} is incorrect`
          
          }</span>)
      }
      {withWordCounter && 
        <span className={`textfield-counter-text${state.isError &&'--error'}`}>{state.wordCount}/{pattern.maxLength || max}</span>
      }
      </div>
      </Container>
  )
}));

TextField.propTypes = {
  pattern: PropTypes.shape({
    isEmail: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    lowerCase: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    upperCase: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    special: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool,
    ]),
    maxLength: PropTypes.number
  }),
  
}

// TextField.defaultProps = {
//   pattern: {}
// };



export default TextField ;