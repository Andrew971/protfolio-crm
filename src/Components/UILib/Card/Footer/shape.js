import React from 'react';
import { ShapeContainer } from './styles'
import {FooterContext} from './constants/context'


const ImageBackground = React.memo((props) => {

  const { 
    skew,
    rounded, 
  } = React.useContext(FooterContext);




  return (
    <ShapeContainer 
      skew={skew}
      rounded={rounded}
    >

    </ShapeContainer>
  )
})


export default ImageBackground