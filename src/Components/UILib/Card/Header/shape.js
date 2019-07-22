import React from 'react';
import { ShapeContainer,StyledLink,StyledImage } from './styles'
import {HeaderContext} from './constants/context'
import {useProgressiveImage} from '../../Lib';


const Shape = React.memo((props) => {

  const { 
    skew,
    rounded, 
    shapeStyle,
    offSet=0, 
    src, 
    preview, 
    srcSet,
    sizes, 
    alt,
  } = React.useContext(HeaderContext);

  const imageRef = React.useRef();
  const parentImageRef = React.useRef();


  (src||preview) && useProgressiveImage(parentImageRef, offSet)
 


  return (
    <ShapeContainer 
      skew={skew}
      rounded={rounded}
      shapeStyle={shapeStyle}

    >
    {(src||preview)&& <StyledLink 
      href={src} 
      className="replace" 
      ref={parentImageRef} 
      srcSet={srcSet} 
      sizes={sizes} 
      
        >
      <StyledImage 
        className="preview"
        src={preview}
        ref={imageRef} 
        data-preview={preview} 
        alt={alt}
      />
    </StyledLink>
    }
    </ShapeContainer>
  )
})


export default Shape