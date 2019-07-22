import React from 'react';
import PropTypes from 'prop-types'
import { StyledCard } from './styles'
import {HeaderContext} from './constants/context'
import ImageBackground from './imageBackground'
import Shape from './shape'
import SvgClip from './svgClip'

const Header = React.memo((props) => {
  const containerRef = React.useRef();

  const {src, preview , srcSet,sizes, alt,skew,rounded, clipPath,svg,...restProps} = props;

  // (src||preview)&&useProgressiveImage(parentImageRef, offSet)

  const modifyChildren = (child) => {
    // const elementList = Array.from(containerRef.current.classList)
    const props = {
      className:`header_content_container`
    };

    return React.cloneElement(child, props);
  }

  const paramObject = {
    ...props
  }

  return (<HeaderContext.Provider value={paramObject}>
    <StyledCard 
      ref={containerRef}
      isSpecial={(src||preview || skew || rounded )}
      clipPath={clipPath}
      {...restProps}
    >
    {svg && <SvgClip />}
    {(skew||rounded) && <Shape /> }
    {(src||preview) && (!skew||!rounded) && <ImageBackground />}
    {
      React.Children.map(props.children, (child) =>  modifyChildren(child))
    }
    </StyledCard>
    </HeaderContext.Provider>
  )
})

Header.propTypes = {
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

export default Header