import React from 'react'
import QuoteBlock from './QuoteBlock'

export default ({ block }) => (
  <QuoteBlock author={block.author}>
    <div dangerouslySetInnerHTML={{__html: block.text}}/>
  </QuoteBlock>
)
