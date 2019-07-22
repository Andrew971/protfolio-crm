import PropTypes from 'prop-types'
import ApolloClient from 'apollo-client';
import React, { Component, useContext } from 'react';

export const ApolloContext = React.createContext(ApolloClient);

export const useApolloClient = (overrideClient) => {
  const {client} = useContext(ApolloContext);

  if (overrideClient) {
    return overrideClient;
  }

  if (!client) {
    // https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/component-utils.tsx#L19-L22
    throw new Error(
      'Could not find "client" in the context or passed in as a prop. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ' +
        'ApolloClient instance in via props.'
    );
  }

  return client
}


useApolloClient.propTypes = {
overrideClient:PropTypes.object
}






export class ApolloProvider extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    client: PropTypes.object.isRequired,
    operations: PropTypes.object,
  };


  constructor(props, context) {
    super(props, context);
    this.operations = new Map()
    // we have to attach to the client since you could have multiple
    // providers
    // XXX this is backwards compat and will be removed in 3.0
    if (!(props.client).__operations_cache__) {
      (props.client).__operations_cache__ = this.operations;
    }
  }

  getChildContext() {
    return {
      client: this.props.client,
      operations: (this.props.client).__operations_cache__,
    };
  }

  render() {
    return ApolloContext ? (
      <ApolloContext.Provider value={this.getChildContext()}>
        {this.props.children}
      </ApolloContext.Provider>
    ) : (
      this.props.children
    );
  }
}

