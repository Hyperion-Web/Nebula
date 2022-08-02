const fileRegex = /\.(vue)$/
const docTag = 'doc'
const blockRegString = `(<${docTag}>)(\\D*?)(<\/${docTag}>)`
const blockRegex = new RegExp(blockRegString, 'g')

const removeDocTag = (src)=>{
    return src.split(blockRegex)[0]
}

export default function myPlugin() {
  return {
    name: 'transform-file',
    transform(src, id) {
      if (fileRegex.test(id)) {
        // copy doc to appropriate docs location
        return {
          code: removeDocTag(src),
          map: null // provide source map if available
        }
      }
    }
  }
}
