import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  const { body } = request.body || request.query
  if (!body) {
    return response.status(400).send('POST param `body` or include in query string to render.')
  }

  const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body>${body}</body>
</html>
`

  response.setHeader('X-XSS-Protection', '0')
  return response.status(200).send(html)
}
