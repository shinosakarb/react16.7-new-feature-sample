import React from 'react'
import TextResource from './TextResource'

const AsyncText = ({text, ms}) => {
  const resource = TextResource.read([text, ms])
  return <div>{resource}</div>
}

export default AsyncText
