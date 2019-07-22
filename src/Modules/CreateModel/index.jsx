import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
import {Section} from '../../Components/UILib/Container';
import {DragDropContext} from 'react-beautiful-dnd';
import ToolBar from './toolBar';
import DropContentZone from './dropContentZone';
import HeadBarContainer from './headBar';
import contentModel from '../../Utils/Constants/contentModel';
import {copy, move, reorder} from '../../Utils/Constants/constMethod';
import UpdateModelSetting from './UpdateModelSetting';
import UpdateFieldSetting from './UpdateFieldSetting';
import uuidv4 from 'uuid/v4';

const CreateModel = React.memo((props) => {
  const [state,
    setState] = React.useState({
      id: uuidv4(), 
      name: null, 
      displayId:null,
      description: null, 
      displayField:null,
      field:{}});
      
  const [editModelState,
    setEditModelState] = React.useState(state.name
    ? false
    : true);
  const [editSettingState,
    setEditSettingState] = React.useState({status: false, field: null});

  const modelEditFormRef = React.useRef();
  const fieldEditFormRef = React.useRef();

  const onModelEditClose = () => {
    setEditModelState(false)
  }

  const onFieldEditModalClose = () => {
    setEditSettingState({
      ...editModelState,
      status:false,
    })
  }

  const onModelEditModalSave = () => {
    const form = modelEditFormRef.current;

    setState({
      ...state,
      [form['ModelName'].name]: form['ModelName'].value,
      [form['ModelDisplayId'].name]: form['ModelDisplayId'].value,
      [form['ModelDescription'].name]: form['ModelDescription'].value
    })
    setEditModelState(false)
  }

  const onFieldEditModalSave = () => {
    const form = fieldEditFormRef.current;
    
    setState({
      ...state,
      field:{
        ...state.field,
        [editSettingState.field.id]:{
      ...state.field[editSettingState.field.id],
      [form['FieldName'].name]: form['FieldName'].value,
      [form['FieldId'].name]: form['FieldId'].value,
      [form['FieldDescription'].name]: form['FieldDescription'].value
      }
    }
    })

    setEditSettingState({
      status:false,
     field:null
    })
  }
  const changeDisplayField = (id) => {
    
    setState({
      ...state,
      displayField:id
    })


  }

  const editContentFieldSettings = (field) => {
    console.log('field',field)
    setEditSettingState({status: true, field: field})
  }

  const onBeforeDragStart = React.useCallback(() => {
    /*...*/
  }, []);

  const onDragStart = React.useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = React.useCallback((result) => {
    /*...*/
    // console.log(result)
  }, []);
  const onDragEnd = React.useCallback((result) => {
    const {source, destination} = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setState({
          ...state,
          field: reorder(state.field, source.index, destination.index)
        });
        break;
      case 'contentModelType':
        const {field, list} = copy(contentModel, state.field, source, destination);
        setState({
          ...state,
          field: list
        });
        editContentFieldSettings(field);
        break;

      default:
        setState({
          ...state,
          field: move(state[source.droppableId], state.field, source, destination)
        });
        break;
    }
  }, [state]);


  return (
    <React.Fragment>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"/>
      <HeadBarContainer state={state} onEdit={setEditModelState}/>
      <DragDropContext
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}>
        <Section direction="row">
          <DropContentZone state={state} onSettingClick={editContentFieldSettings}/>
          <ToolBar contentModel={contentModel}/>
        </Section>
      </DragDropContext>
      {editSettingState.status && <UpdateFieldSetting
        ref={fieldEditFormRef}
        onClose={onFieldEditModalClose}
        onSave={onFieldEditModalSave}
        state={editSettingState.field}
        rootState={state} 
        changeDisplayField={changeDisplayField}/>
}
      {editModelState &&
          <UpdateModelSetting ref={modelEditFormRef} onClose={onModelEditClose} onSave={onModelEditModalSave} state={state}/>
      }
    </React.Fragment>
  )
})

CreateModel.propTypes = {}

const mapState = state => ({count: state.sharedModel.count});

const mapDispatch = ({
  sharedModel: {
    increment,
    incrementAsync
  }
}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

export default withRouter((connect(mapState, mapDispatch)(CreateModel)));
