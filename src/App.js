import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom'
import NotFound from './Shared/404'
import routeMap from './Utils/Constants/constantRoute'
import {PublicRoute} from './Utils/Constants/constMethod'
import {ThemeProvider} from 'styled-components';
import SEO from './Utils/Lib/seo';
import {AppBar} from './Components/UILib/AppBar';
import {AppContainer, Main} from './Components/UILib/Container';
import {Drawer} from './Components/UILib/Drawer';
import Icon from './Components/UILib/Icon';
import {MenuItem} from './Components/UILib/Menu';
// import PropTypes from 'prop-types';
// import Cancel from './Assets/icon/cancel.svg'
const LoadingMessage = (props) => {
  return ("I'm loading.")
}

function RootContainer(props) {
  const [state,
    setState] = React.useState({isSideMenuOpen: false})
  const toggleSideMenuOpen = () => {

    setState((prevState) => {

      return {
        isSideMenuOpen: !prevState.isSideMenuOpen
      }
    })
  }
  const closeSideMenu = () => {

    setState({
        isSideMenuOpen: false
      }
    )
  }
  const {isSideMenuOpen} = state;
  const {Theme} = props;
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <React.Suspense fallback={< LoadingMessage />}>
          <SEO
            schema="AboutPage"
            title="Base"
            description="A starting point for Meteor applications."
            path="/"
            contentType="product"/>
          <AppBar>
            <Icon
              name="simple-hamburger"
              open={isSideMenuOpen}
              onClick={() => toggleSideMenuOpen()}/>
          </AppBar>
          <AppContainer>
            <Drawer
              open={isSideMenuOpen}
              width={4}
              distance={100}
              direction="left"
              onClose={closeSideMenu}>
              <MenuItem
                icon="profile"
                primaryText="test primary"
                secondaryText="test secondary"
                to="/"
              />
              <MenuItem
                icon="profile"
                primaryText="test primary"
                secondaryText="test secondary"
                to="/table"
              />
              <MenuItem
                icon="profile"
                primaryText="Content Management"
                to="/content-management"
              />
            </Drawer>
            <Main>
              <Switch>
                {Object.entries(routeMap).map(([routeKey,routeValue], n) => {
                  return (<PublicRoute exact={routeValue.isExact} key={n} {...routeValue} {...props}/>)
                })
}
                <Route render={(routeProps) => <NotFound {...routeProps}/>}/>
              </Switch>
            </Main>
          </AppContainer>
        </React.Suspense>
      </React.Fragment>
    </ThemeProvider>

  );
}

const mapState = state => ({Theme: state.sharedModel.Theme})

const mapDispatch = ({sharedModel: {
    setSearchTerm
  }}) => ({
  increment: () => setSearchTerm(1)
})

RootContainer.propTypes = {};

export default withRouter(connect(mapState, mapDispatch)(RootContainer))