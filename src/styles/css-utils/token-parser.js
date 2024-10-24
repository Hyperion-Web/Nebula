import slugify from 'slugify'

const tokensParse = (tokens) => {
  const nameSlug = (text) => slugify(text, { lower: true })
  const response = {}

  tokens.forEach(({ name, value }) => {
    response[nameSlug(name)] = value
  })
  return response
}

export default tokensParse
