import React from 'react';
import PropTypes from 'prop-types'
import { StyledCard } from './styles'
import {SectionContext} from './constants/context'
import ImageBackground from './imageBackground'
import Shape from './shape'
import SvgClip from './svgClip'

const Section = React.memo((props) => {
  const containerRef = React.useRef();

  const {src, preview , srcSet,sizes, alt,skew,rounded, clipPath,svg,...restProps} = props;

  // (src||preview)&&useProgressiveImage(parentImageRef, offSet)

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

  return (<SectionContext.Provider value={paramObject}>
    <StyledCard 
      ref={containerRef}
      isSpecial={(src||preview || skew || rounded )}
      clipPath={clipPath}
      {...restProps}
    >
    {svg && <SvgClip />}
    {(!src||!preview) && (skew||rounded) && <Shape /> }
    {(src||preview)&&<ImageBackground />}
    {
      React.Children.map(props.children, (child) =>  modifyChildren(child))
    }
    </StyledCard>
    </SectionContext.Provider>
  )
})

Section.propTypes = {
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

export default Section