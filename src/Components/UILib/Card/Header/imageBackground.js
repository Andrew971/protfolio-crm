import React from 'react';
import {useProgressiveImage} from '../../Lib';
import { StyledLink,StyledImage } from './styles'
import {HeaderContext} from './constants/context'


const ImageBackground = React.memo((props) => {
  const imageRef = React.useRef();
  const parentImageRef = React.useRef();

  const { 
    offSet=0, 
    src, 
    preview, 
    srcSet,
    sizes, 
    alt,
    skew,
    rounded, 
    } = React.useContext(HeaderContext);

  useProgressiveImage(parentImageRef, offSet)
 


  return (
    <StyledLink 
      href={src} 
      className="replace" 
      ref={parentImageRef} 
      srcSet={srcSet} 
      sizes={sizes} 
      skew={skew}
      rounded={rounded}
        >
      <StyledImage 
        className="preview"
        src={preview}
        ref={imageRef} 
        data-preview={preview} 
        alt={alt}
      />
    </StyledLink>
  )
})


export default ImageBackground