import styled from "styled-components";
import {Media} from '../../Config';
import React from 'react'
// import PropTypes from 'prop-types'

const Container = styled.div `
display:flex;
  align-items:center;
  justify-content:flex-start;
padding:1rem;
height: 10vh;
text-decoration:none;
color:inherit;
width:100%;
flex-flow:row nowrap;

${Media.desktop `
  /* display:none; */
`}
`;




const TableTool = React.memo((props) => {

  
  return (
    <Container>
    <div>
      test
    </div>
    </Container>
  )
})

TableTool.propTypes = {

}


export default TableTool