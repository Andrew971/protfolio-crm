import gql from "graphql-tag";


export default gql`
  
    query listCrmTableDevs ($input:TableCrmTableDevFilterInput) {
      listCrmTableDevs(filter:$input, limit:2) {
       items{
        Key 
        Type
        Slug
        ModelId
        Name
        Status
        Tags
      }
      nextToken
      }
    }
  
`;


/*
query listCrmTableDevs ($input:TableCrmTableDevFilterInput) {
      listCrmTableDevs(filter:$input) {
       items{
        Key 
        Type
        Slug
        ModelId
        Name
        Status
        Tags
      }
      nextToken
      }
    }
*/