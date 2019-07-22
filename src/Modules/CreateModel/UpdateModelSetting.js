import React from 'react'
// import PropTypes from 'prop-types'
import {TextField} from '../../Components/UILib/Input'; 
import Icon from '../../Components/UILib/Icon'
import {OverlayModal} from '../../Components/UILib/Modal';
import Portal from '../../Utils/portal';
import slug from 'slugify';

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
          label="Name"
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
            const field = ref.current['ModelDisplayId']
            if(field.defaultValue === field.value){
              console.log(e.target.value.length)
              if(e.target.value.length === 0 ) {
                field.defaultValue = ""
              }else{
            field.defaultValue = slug(e.target.value)
              }
            }
          }}
          errorMessage="custom error message"
          withWordCounter
          />
          <TextField
          id="ModelDisplayId"
          name="displayId"
          type="text"
          label="Id"
          helperText="helper text"
          placeholder="placeholder test"
          defaultValue={state.displayId}
          icon={<Icon name = "profile" />}
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
          label="Description"
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
