import React from 'react';
import { ShapeContainer } from './styles'
import {HeaderContext} from './constants/context'


const ImageBackground = React.memo((props) => {

  const { 
    skew,
    rounded, 
    shapeStyle
  } = React.useContext(HeaderContext);




  return (
    <ShapeContainer 
      skew={skew}
      rounded={rounded}
      shapeStyle={shapeStyle}

    >

    </ShapeContainer>
  )
})


export default ImageBackground