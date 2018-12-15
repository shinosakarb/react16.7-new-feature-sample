import { unstable_createResource } from 'react-cache'

const TextResource = unstable_createResource(([text, ms = 0]) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`Promise resolved ${text}!`), ms)
  )
}, ([text, ms]) => text)

export default TextResource