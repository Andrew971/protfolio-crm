// import React from 'react';
import lazyLoadable from '../Lib/lazyLoadable'
// import Home from '../../Modules/Home'
// import Other from '../../Modules/Other'
// const Other = React.lazy(() => import('../../Modules/Other'));



// const preloadedHome = import(/* webpackChunkName: "Home" */ '../../Modules/Home');
const Home = lazyLoadable(() => import(/* webpackChunkName: "Home" */ '../../Modules/Home'));

// const preloadedOther = 
const Other = lazyLoadable(() => import(/* webpackChunkName: "Other" */ '../../Modules/Other'));
// const preloadedOther = 
const Table = lazyLoadable(() => import(/* webpackChunkName: "Table" */ '../../Modules/Table'));


const ContentManagement = lazyLoadable(() => import(/* webpackChunkName: "ContentManagement" */ '../../Modules/ContentManagement'));
const CMSDashboard = lazyLoadable(() => import(/* webpackChunkName: "CMSDashboard" */ '../../Modules/ContentManagement/cmsDashboard'));
const ContentList = lazyLoadable(() => import(/* webpackChunkName: "ContentList" */ '../../Modules/ContentManagement/contentList'));
const ModelList = lazyLoadable(() => import(/* webpackChunkName: "ModelList" */ '../../Modules/ContentManagement/modelList'));

// const preloadedOther = 
const CreateModel = lazyLoadable(() => import(/* webpackChunkName: "CreateModel" */ '../../Modules/CreateModel'));
// const preloadedOther = 
const CreateContent = lazyLoadable(() => import(/* webpackChunkName: "CreateContent" */ '../../Modules/CreateContent'));


export default {
  Home:{
    component: Home,
    path: '/',
    isExact:true,
    fetcher: (props) => {

      return {
        props:"test"
      }
    }
  },
  Table:{
    component: Table,
    path: '/table',
    isExact:true
  },
  Other:{
    component: Other,
    path: '/other',
    isExact:true,
    // routes: [
    //   {
    //     component: Other,
    //     path: '/other/1',
    //     isExact:true,
    //   },

    // ]
  },
  "Content Management":{
    component: ContentManagement,
    path: '/content-management',
    isExact:false,
    fetcher: (props) => {
      CMSDashboard.preload();
      ContentList.preload();
      ModelList.preload();
      return {
        props:"test"
      }
    },
    routes: {
      Dashboard:{
        component: CMSDashboard,
        path: '/content-management',
        isExact:true,
            fetcher: (props) => {

      return {
        props:"test"
      }
    }
      },
      Content:{
        component: ContentList,
        path: '/content-management/content',
        isExact:true,
            fetcher: (props) => {

      return {
        props:"test"
      }
    }
      },
      Model:{
        component: ModelList,
        path: '/content-management/model',
        isExact:true,
            fetcher: (props) => {

      return {
        props:"test"
      }
    }
      },

    }
  },
  'Create new Model':{
    component: CreateModel,
    path: '/create-model',
    isExact:true,
    // routes: [
    //   {
    //     component: Other,
    //     path: '/other/1',
    //     isExact:true,
    //   },

    // ]
  },
  'Create new Content':{
    component: CreateContent,
    path: '/create-content',
    isExact:true,
    // routes: [
    //   {
    //     component: Other,
    //     path: '/other/1',
    //     isExact:true,
    //   },

    // ]
  },
};
