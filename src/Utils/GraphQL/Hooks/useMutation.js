import PropTypes from 'prop-types'

import {useApolloClient} from '../../Lib/Apollo';


const useMutation = (mutation,option={}) => {
  const  { 
    client:overrideClient, 
  } = option;
  // console.log(option)
  const client = useApolloClient(overrideClient);

  
  return options => client.mutate({ mutation, ...options });

}

useMutation.propTypes = {
  option: PropTypes.shape({
    update : PropTypes.func
  })
}

export default useMutation
