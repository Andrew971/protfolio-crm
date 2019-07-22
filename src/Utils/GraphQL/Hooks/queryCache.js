// import React from 'react'
// import PropTypes from 'prop-types'
import ApolloClient from 'apollo-client';
import { print } from 'graphql/language/printer';
import { objToKey } from './utils';
const cachedQueriesByClient = new WeakMap();

export function getCachedObservableQuery(
  client=ApolloClient,
  options=null
) {
  const queriesForClient = getCachedQueriesForClient(client);
  const cacheKey = getCacheKey(options);
  let observableQuery = queriesForClient.get(cacheKey);
  if (observableQuery == null) {
    observableQuery = client.watchQuery(options);
    queriesForClient.set(cacheKey, observableQuery);
  }
  return observableQuery;
}

export function invalidateCachedObservableQuery(
  client=ApolloClient,
  options=null
) {
  const queriesForClient = getCachedQueriesForClient(client);
  const cacheKey = getCacheKey(options);
  queriesForClient.delete(cacheKey);
}

function getCachedQueriesForClient(client=ApolloClient) {
  let queriesForClient = cachedQueriesByClient.get(client);
  if (queriesForClient == null) {
    queriesForClient = new Map();
    cachedQueriesByClient.set(client, queriesForClient);
  }
  return queriesForClient;
}

function getCacheKey({
  query,
  ...options
}) {
  return `${print(query)}@@${objToKey(options)}`;

}
