import React from 'react'
import renderer from 'react-test-renderer'


import HighlightedBlock from '../HighlightedBlock'


describe("HighlightedBlock", () => {
  it("renders", () => {
    const actual = renderer.create(<HighlightedBlock>test</HighlightedBlock>)
    const actualTree = actual.toJSON()

    expect(actualTree).toMatchSnapshot()
  })
})
