import React from 'react'
// import PropTypes from 'prop-types'
import {TextField} from '../../Components/UILib/Input'; 
import Icon from '../../Components/UILib/Icon'
import {OverlayModal} from '../../Components/UILib/Modal';
import Portal from '../../Utils/portal';

const UpdateModelSetting = React.memo(React.forwardRef((props,ref) => {
  const  { onClose,onSave,state} = props;
  // console.log(props,ref)
  return (<Portal>
    <OverlayModal onClose={onClose}>
            <form ref={ref}>
          <TextField
          id="ModelName"
          name="name"
          type="text"
          label="Label test"
          helperText="helper text"
          placeholder="placeholder test"
          defaultValue={state.name}
          icon={< Icon name = "profile" />}
          position='start'
          pattern={{
          special:false,
          maxLength: 64
          }}
          onChange={(e)=>{
            const field = ref.current['ModelId']
            if(field.defaultValue === field.value){
            field.defaultValue = e.target.value
            }
          }}
          errorMessage="custom error message"
          withWordCounter
          />
          <TextField
          id="ModelId"
          name="id"
          type="text"
          label="Label test"
          helperText="helper text"
          placeholder="placeholder test"
          defaultValue={state.id}
          icon={< Icon name = "profile" />}
          position='start'
          pattern={{
          special:false,
          maxLength: 64
          }}
          errorMessage="custom error message"
          withWordCounter
          />
          <TextField
          id="ModelDescription"
          name="description"
          type="text"
          label="Label test"
          helperText="helper text"
          placeholder="placeholder test"
          defaultValue={state.description}
          icon={< Icon name = "profile" />}
          position='start'
          pattern={{
          special:false,
          maxLength: 64
          }}
          errorMessage="custom error message"
          withWordCounter
          />
          </form>

          <button onClick={onSave}>save</button>
          <button onClick={onClose}>close</button>
          </OverlayModal>
          </Portal>
  )
}))

UpdateModelSetting.propTypes = {

}

export default UpdateModelSetting
