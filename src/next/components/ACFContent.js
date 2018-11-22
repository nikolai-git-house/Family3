import React, { Fragment } from 'react'

export default ({ object, blocks = {} }) => (
  <Fragment>
    {
      Array.isArray(object.acf.content) && object.acf.content.map((block, i) => {
        // console.log(blocks, block.acf_fc_layout)
        const Block = blocks[block.acf_fc_layout] || (() => null)

        return <Block block={block} object={object} key={i}/>
      })
    }
  </Fragment>
)
