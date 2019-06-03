import React from 'react';
import { ShapeContainer } from './styles'
import {SectionContext} from './constants/context'


const ImageBackground = React.memo((props) => {

  const { 
    skew,
    rounded, 
    shapeStyle
  } = React.useContext(SectionContext);




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