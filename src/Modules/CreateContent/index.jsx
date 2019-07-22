import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
import {Section} from '../../Components/UILib/Container';
import ToolBar from './toolBar';
import ContentEditor from './ContentEditor';
import HeadBarContainer from './headBar';
// import contentModel from '../../Utils/Constants/contentModel';
// import {copy, move, reorder} from '../../Utils/Constants/constMethod';
// import UpdateModelSetting from './UpdateModelSetting';
// import UpdateFieldSetting from './UpdateFieldSetting';
import {mockContentModel} from '../../Utils/Constants/mockData'
import uuid from 'uuid/v4';

const CreateModel = React.memo((props) => {
 const { location } = props;
 const { state:locationState  } = location;
 const initialContentTypeRef = React.useRef();
 const contentStateRef = React.useRef();

const contentModel = locationState? locationState.contentModel : mockContentModel;

const onSaveContent = async ()=>{
  try{
    const iterableEditorList = Object.entries(initialContentTypeRef.current.editor)
    for (let [fieldId,editor] of iterableEditorList){
      let editorOutput = await editor.save();
      const richEditorData = contentModel.field[fieldId];

      contentStateRef.current = {
        ...contentStateRef.current,
        [richEditorData.name]:{
          ...richEditorData,
          value:editorOutput
        }
      }
    }
    // console.log('Article data: ', editorOutput)

    
    const displayFieldName = mockContentModel.field[mockContentModel.displayField].name;

    const entries = {
      id: uuid(),
      name:contentStateRef.current[displayFieldName].value,
      modelId: contentModel.id,
      modelDisplayId: contentModel.displayId,
      data: contentStateRef.current,
      
    }
    
    console.log(entries)
  }
  catch(error)  {
    console.log('Saving failed: ', error)
  };

  }

  return (
    <React.Fragment>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"/>
      <HeadBarContainer state={contentModel} onEdit={true} onSaveContent={onSaveContent}/>
        <Section direction="row">
          <ContentEditor ref={initialContentTypeRef} state={contentModel} setStateRef={contentStateRef}/>
          <ToolBar contentModel={true} onSaveContent={onSaveContent}/>
        </Section>
      {/* {editSettingState.status && <UpdateFieldSetting
        ref={fieldEditFormRef}
        onClose={onFieldEditModalClose}
        onSave={onFieldEditModalSave}
        state={editSettingState.field}/>
}
      {editModelState &&
          <UpdateModelSetting ref={modelEditFormRef} onClose={onModelEditClose} onSave={onModelEditModalSave} state={state}/>
      } */}
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
