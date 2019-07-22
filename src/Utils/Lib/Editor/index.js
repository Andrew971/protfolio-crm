import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import LinkTool from '@editorjs/link';
import Quote from '@editorjs/quote';
// import SimpleImage from '@editorjs/simple-image';
import CodeTool from '@editorjs/code';
import RawTool from '@editorjs/raw';
import Checklist from '@editorjs/checklist';
import MarkerTool from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import TableTool from '@editorjs/table';
import InlineCodeTool from '@editorjs/inline-code';
import './UI/styleSheet.css';

import {RootContainer, ContentEditor} from './UI'

const Editor = React.memo(React.forwardRef((props,ref) =>{
  // console.log(props,ref)
  const { fieldId } = props;
  const editor = new EditorJS({

    holder: `codex-editor-${fieldId}`,
    initialBlock: "paragraph",
    autofocus: true,
    // placeholder: 'Let`s write an awesome story!',
    data: {},
    tools: {
      paragraph: {
        class: Paragraph,
        inlineToolbar: true
      },
      header: {
        class: Header,
        inlineToolbar: false,
        config: {
          placeholder : 'Enter a header'
        }
      },
      list: {
        class: List,
        inlineToolbar: false
      },
      image: {
        class: ImageTool,
        config: {
          endpoints : {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
        }
      },
      embed: {
        class: Embed,
        config: {
          services : {
            youtube: true,
            coub: true
          }
        },
        inlineToolbar: true

      },
      linkTool: {
        class: LinkTool,
        config: {
          endpoint : 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
        }
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
          quotePlaceholder : 'Enter a quote',
          captionPlaceholder : 'Quote\'s author'
        }
      },
      // simpleImage: SimpleImage,
      code: {
        class: CodeTool,
        config: {
          placeholder : "put your code here"
        }
      },
      raw: {
        class: RawTool,
        config: {
          placeholder : "put your raw code here"
        }
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true
      },
      Marker: {
        class: MarkerTool,
        shortcut: 'CMD+SHIFT+M'
      },
      delimiter: Delimiter,
      table: {
        class: TableTool,
        inlineToolbar: true,
        config: {
          rows : 2,
          cols : 2
        }
      },
      inlineCode: {
        class: InlineCodeTool,
        shortcut: 'CMD+SHIFT+M'
      }
    },
    // autofocus: true,

    onReady: () => {
      // console.log('Editor.js is ready to work!', editor)
      if(ref){
      const previousEditor = ref.current?ref.current.editor:{};
      ref.current = {
        ...ref.current,
        editor:{
          ...previousEditor,
          [fieldId]: editor
        }
      };
    }
      // console.log('ref',ref)
    }
  
  });

  return ( <RootContainer >
    <ContentEditor id={`codex-editor-${fieldId}`}/>
  </RootContainer> )
}
))

Editor.propTypes = {}

export default Editor;
