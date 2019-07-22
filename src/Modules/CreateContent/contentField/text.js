import React from 'react'
// import PropTypes from 'prop-types'
import {TextField} from '../../../Components/UILib/Input'; 
import Icon from '../../../Components/UILib/Icon'
// import {OverlayModal} from '../../Components/UILib/Modal';
// import Portal from '../../Utils/portal';
import {ContentFieldContext} from './constant';

const TextContentField = React.memo(React.forwardRef((props,ref) => {
  const  { state,setStateRef} = React.useContext(ContentFieldContext);
  // console.log(props,ref)
    
  return (
    <TextField
          id={state.id}
          name="id"
          type="text"
          label="Label test"
          helperText="helper text"
          placeholder="placeholder test"
          icon={<Icon name = "profile" />}
          position='start'
          pattern={{
          special:false,
          maxLength: 64
          }}
          errorMessage="custom error message"
          withWordCounter
          onChange={(e)=>{
            e.target.dataset.value = e.target.value
            setStateRef.current = {
            ...setStateRef.current,
            [state.name]:{
              ...state,
              value:e.target.value
            }
          };
          }}
    />
  )
}))

TextContentField.propTypes = {

}

export default TextContentField
