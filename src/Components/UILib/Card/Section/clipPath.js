import React from 'react';
import {useProgressiveImage} from '../../Lib';
import { ShapeContainer } from './styles'
import {HeaderContext} from './constants/context'


const ImageBackground = React.memo((props) => {
  const imageRef = React.useRef();
  const parentImageRef = React.useRef();

  const { 
    skew,
    rounded, 
    ...restProps} = React.useContext(HeaderContext);




  return (
    <ShapeContainer 
      skew={skew}
      rounded={rounded}
    >

    </ShapeContainer>
  )
})


export default ImageBackground