const fileRegex = /\.(vue)$/
const docTag = 'doc'
const blockRegString = `(<${docTag}>)(\\D*?)(<\/${docTag}>)`
const blockRegex = new RegExp(blockRegString, 'g')

const removeDocTag = (src)=>{
    return src.split(blockRegex)[0]
}
        return {
          code: resdf 
    }
  }
}
