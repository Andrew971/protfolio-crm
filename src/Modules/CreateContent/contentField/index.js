import React from 'react'
// import PropTypes from 'prop-types'
// import {TextField} from '../../../Components/UILib/Input'; 
// import Icon from '../../../Components/UILib/Icon'
// import {OverlayModal} from '../../Components/UILib/Modal';
// import Portal from '../../Utils/portal';
import {ContentFieldContext} from './constant';
import TextContentField from './text';
import Editor from '../../../Utils/Lib/Editor'

const fetchContentField = (state,ref) => {
  switch(state.type){

    case "Text":
      return <TextContentField ref={ref} />
    case "Rich Editor":
      return  <Editor ref={ref} fieldId={state.id}/>

    default:
      return <div></div>
  }
}


const contentField = React.memo(React.forwardRef((props,ref) => {
  const  { id, state,setStateRef } = props;
  // console.log(props,ref)

  const param  = { 
    id,
    state,
    setStateRef
  }
  return (<ContentFieldContext.Provider value={param}>
    {
      fetchContentField(state,ref)
    }
    
    </ContentFieldContext.Provider>
  )
}))

contentField.propTypes = {

}

export default contentField
