import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
// import LazyImage from '../../Components/UILib/Image'
// import {LazyCard} from '../../Components/UILib/Card'
import Editor from '../../Utils/Lib/Editor'

function HomeContainer () {

  

  return (<>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"
      />
      <Link to="/other">Go to Other</Link>
      <Link to="/table">Go to table</Link>
      <div>Home</div>
      <h2>Using CKEditor 5 build in React ~ Classic editor</h2>
       <Editor />
    </>
  )
}

HomeContainer.propTypes = {

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

export default withRouter((connect(mapState, mapDispatch)(HomeContainer)));
