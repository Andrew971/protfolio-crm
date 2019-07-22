import {useContext, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types'
import {useApolloClient} from '../../Lib/Apollo';
import {compact,SSRContext} from './utils';
import {getCachedObservableQuery, invalidateCachedObservableQuery} from './queryCache';
import  {
  ApolloError,
} from 'apollo-client';



const useQuery = (query, option = {}) => {
  const {
    // Hook options
    ssr = true,
    skip = false,
    suspend = true,

    // Watch options
    pollInterval = 0,
    notifyOnNetworkStatusChange = false,

    // Apollo client options
    client: overrideClient,
    context = null,
    metadata = null,
    variables = null,
    fetchPolicy: actualCachePolicy,
    errorPolicy = null,
    fetchResults = null
  } = option;

  const client = useApolloClient(overrideClient);
  const ssrManager = useContext(SSRContext); 
  const ssrInUse = ssr && ssrManager;
  // const ssrInUse = ssr;
  // console.log(client)
  // Skips when `skip: true` or SSRContext passed but `ssr: false` 
  const shouldSkip = skip || (ssrManager != null && !ssr);
  // const shouldSkip = skip;

  const fetchPolicy = ssrInUse &&
  // Taken from
  // https://github.com/apollographql/react-apollo/blob/2d7e48b7d0c26e792e1ed26e98b
  // b84d8fba5bb8a/src/Query.tsx#L167-L169
  (actualCachePolicy === 'network-only' || actualCachePolicy === 'cache-and-network')
    ? 'cache-first'
    : actualCachePolicy;

  const watchQueryOptions = useMemo(() => compact({
    context,
    errorPolicy,
    fetchPolicy,
    fetchResults,
    metadata,
    notifyOnNetworkStatusChange,
    pollInterval,
    query,
    variables
  }), [
    query,
    pollInterval,
    notifyOnNetworkStatusChange,
    context,
    metadata,
    variables,
    fetchPolicy,
    errorPolicy,
    fetchResults
  ]);
  // console.log('watchQueryOptions',watchQueryOptions)
  const observableQuery = useMemo(() => getCachedObservableQuery(client, watchQueryOptions), [client, watchQueryOptions]);
  // console.log('observableQuery',observableQuery)

  // const [responseId,
  //   setResponseId] = useState(0);


  const currentResult = useMemo(() => {
      const helpers = {
        fetchMore: observableQuery
          .fetchMore
          .bind(observableQuery),
        refetch: observableQuery
          .refetch
          .bind(observableQuery),
        startPolling: observableQuery
          .startPolling
          .bind(observableQuery),
        stopPolling: observableQuery
          .stopPolling
          .bind(observableQuery),
        updateQuery: observableQuery
          .updateQuery
          .bind(observableQuery)
      };

      const result = observableQuery.currentResult();
      // console.log('result',result)
// return the old result data when there is an error
let data = result.data;
if (result.error || result.errors) {
  data = {
    ...result.data,
    ...(observableQuery.getLastResult() || {}).data,
  };
}
if (shouldSkip) {
  // console.log('test')
  // Taken from https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/Query.tsx#L376-L381
  return {
    ...helpers,
    data: undefined,
    error: undefined,
    loading: false,
    networkStatus: undefined,
  };
}

return {
  ...helpers,
  data,
  error:
    result.errors && result.errors.length > 0
      ? new ApolloError({ graphQLErrors: result.errors })
      : result.error,
  errors: result.errors,
  loading: result.loading,
  networkStatus: suspend ? undefined : result.networkStatus,
  partial: result.partial,
};


},
[shouldSkip, observableQuery,suspend]
);
// console.log('NetworkStatus',NetworkStatus)

useEffect(
  () => {
    if (shouldSkip) {
      return;
    }
    // console.log(observableQuery)
    // const invalidateCurrentResult = () => {

      // actHack(() => {
      //   setResponseId(x=>x+1);
      // });
    
    // };

    // const subscription = observableQuery.subscribe(
    //   invalidateCurrentResult,
    //   invalidateCurrentResult
    // );

    invalidateCachedObservableQuery(client, watchQueryOptions);

    return () => {
      // subscription.unsubscribe();
    };
  },
  [shouldSkip, observableQuery,client,watchQueryOptions,currentResult]
);



      ensureSupportedFetchPolicy(suspend, fetchPolicy);

  if (currentResult.partial) {
    if (suspend) {
      // throw a promise - use the react suspense to wait until the data is
      // available
      throw observableQuery.result();
    }

    if (ssrInUse) {
      ssrManager&&  ssrManager.register(observableQuery.result());
    }
  }
  // console.log('currentResult',currentResult)
  return currentResult;
}

function ensureSupportedFetchPolicy(
  suspend,
  fetchPolicy
) {
  if (suspend && fetchPolicy && fetchPolicy !== 'cache-first') {
    throw new Error(
      `Fetch policy ${fetchPolicy} is not supported without 'suspend: false'`
    );
  }
}

    useQuery.propTypes = {
      option: PropTypes.shape({
        ssr: PropTypes.bool, skip: PropTypes.bool, suspend: PropTypes.bool,

        // Watch options
        pollInterval: PropTypes.number,
        notifyOnNetworkStatusChange: PropTypes.bool,

        // Apollo client options
        client: PropTypes.object,
        context: PropTypes.object,
        metadata: PropTypes.object,
        variables: PropTypes.object,
        fetchPolicy: PropTypes.string,
        errorPolicy: PropTypes.string,
        fetchResults: PropTypes.string
      })
    }

    export default useQuery
