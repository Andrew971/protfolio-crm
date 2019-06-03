import React from 'react';
import PropTypes from 'prop-types'
import { H1,H2,H3,H4,Body,Subtitle,Title } from './styles'
// import {TypographyContext} from './constants/context'


const Typography = React.memo((props) => {

  const modifyChildren = (child) => {
    // const elementList = Array.from(containerRef.current.classList)
    const props = {
      className:`lazy-card_content_element`
    };

    return React.cloneElement(child, props);
  }


  switch(props.variant){
    case "h1":
      return <H1 {...props}>{props.children}</H1>;
    case "h2":
      return <H2 {...props}>{props.children}</H2>;
    case "h3":
      return <H3 {...props}>{props.children}</H3>;
    case "h4":
      return <H3 {...props}>{props.children}</H3>;
    case "title":
      return <Title {...props}>{props.children}</Title>;
    case "subtitle":
      return <Subtitle {...props}>{props.children}</Subtitle>;
    case "body":
      return <Body {...props}>{props.children}</Body>;
    default:
      return <Body {...props}>{props.children}</Body>;
  }
  
})

Typography.propTypes = {

}

export default Typography