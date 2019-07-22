import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
// import LazyImage from '../../Components/UILib/Image'
// import {LazyCard} from '../../Components/UILib/Card'
// import Editor from '../../Utils/Lib/Editor'
import {PublicRoute} from '../../Utils/Constants/constMethod';
// import Portal from '../../Utils/portal';
import {ModuleNav,ModuleNavItem} from '../../Components/Element';

import {testQuery} from "../../Utils/GraphQL/Query";
import {testMutation} from "../../Utils/GraphQL/Mutation";
import {useQuery,useMutation} from "../../Utils/GraphQL/Hooks"


function ContentManagement (props) {
  const {routes} = props;
  const {data} = useQuery(testQuery,{
    variables:{
      input:{
        "Type":{
          "eq":"String"
        }
      }
    }
  })
  const mutation = useMutation(testMutation)

  async function onSave () {
    console.log(data)
    const dataMutationm = await mutation({
      variables:{
      putPost:{
      "Key": "String6",
      "Type": "String",
      "Slug": "String",
      "ModelId": "String",
      "Name": "String6",
      "Status": "String",
      "Tags": "String"
      }
    },
    update: (cache, mutationResult) => {
      /* your custom update logic */
      console.log('proxy',cache)
      console.log('mutationResult',mutationResult)
      console.log('listCrmTableDevsCache',cache.readQuery({ query: testQuery }))
      const { data:{createCrmTableDev} } = mutationResult;
      const { listCrmTableDevs } = cache.readQuery({ query: testQuery });
        cache.writeQuery({
          query: testQuery,
          data: { listCrmTableDevs: {
            items:listCrmTableDevs.items.concat([createCrmTableDev]), 
            nextToken:listCrmTableDevs.nextToken
          }
        }
        });
    },
  })
    console.log('data',dataMutationm)
  }
  
console.log(data)
  return (<>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"
      />
      <ModuleNav>
      {Object.entries(routes).map(([routeKey,routeValue],n)=>{

        return (
          <ModuleNavItem
                key={`${routeKey} ${n}`}
                icon="profile"
                primaryText={routeKey}
                secondaryText="test secondary"
                to={`${routeValue.path}`}
              />
        )
      })}</ModuleNav>
      <button onClick={onSave}> Save </button>
      <div>{data.listCrmTableDevs && data.listCrmTableDevs.items.map(item=>{
        
        return <div key={item.Key}>{item.Name}</div>
        
        })}</div>

      <Switch>
        {Object.entries(routes).map(([routekey,routeValue], n) => {
          return (<PublicRoute exact={routeValue.isExact} key={n} {...routeValue} {...props}/>)
        })}
        
      </Switch>
      {/* <Portal>
          <div>test</div>
        </Portal> */}
    </>
  )
}

ContentManagement.propTypes = {

}

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

export default withRouter((connect(mapState, mapDispatch)(ContentManagement)));
