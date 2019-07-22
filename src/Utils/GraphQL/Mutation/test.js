import gql from "graphql-tag";


export default gql`
  
    mutation PutPost ($putPost:CreateCrmTableDevInput!) {
      createCrmTableDev(input: $putPost) {
        Key 
        Type
        Slug
        ModelId
        Name
        Status
        Tags
      }
    }
  
`;