import React from 'react';
import { SvgContainer } from './styles'
import {SectionContext} from './constants/context'


const SvgClip = React.memo((props) => {

  const { 
    svg,
  } = React.useContext(SectionContext);




  return (
    <SvgContainer 
    viewBox="0 0 100 100" preserveAspectRatio="none"
    svg={svg}
    >
    <polygon points="0,100 100,0 100,100"/>
    </SvgContainer>
  )
})


export default SvgClip