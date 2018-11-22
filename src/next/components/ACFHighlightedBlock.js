import React from 'react'
import HighlightedBlock from './HighlightedBlock'

export default ({ block }) => (
  <HighlightedBlock>
    <div dangerouslySetInnerHTML={{__html: block.text}}/>
  </HighlightedBlock>
)
