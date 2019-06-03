import React from 'react';
import PropTypes from 'prop-types'
import { StyledCard } from './styles'
import {FooterContext} from './constants/context'
import ImageBackground from './imageBackground'
import Shape from './shape'
// import ClipPath from './clipPath'

const Footer = React.memo((props) => {
  const containerRef = React.useRef();

  const {src, preview , srcSet,sizes, alt,skew,rounded, clipPath,...restProps} = props;

  // (src||preview)&&useProgressiveImage(parentImageRef, offSet)
 console.log(props)

  const modifyChildren = (child) => {
    // const elementList = Array.from(containerRef.current.classList)
    const props = {
      className:`lazy-card_content_element`
    };

    return React.cloneElement(child, props);
  }

  const paramObject = {
    ...props
  }

  return (<FooterContext.Provider value={paramObject}>
    <StyledCard 
      ref={containerRef}
      isSpecial={(src||preview || skew || rounded )}
      clipPath={clipPath}
      {...restProps}
    >
    {/* {ClipPath && <ClipPath />} */}
    {(!src||!preview) && (skew||rounded) && <Shape /> }
    {(src||preview)&&<ImageBackground />}
    {
      React.Children.map(props.children, (child) =>  modifyChildren(child))
    }
    </StyledCard>
    </FooterContext.Provider>
  )
})

Footer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string,
  preview: PropTypes.string,
  offSet: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  skew:  PropTypes.shape({
    degree:PropTypes.string.isRequired,
    origin:PropTypes.string.isRequired
  }),
  rounded:  PropTypes.shape({
    left:PropTypes.string.isRequired,
    right:PropTypes.string.isRequired
  }),
}

export default Footer