const express = require('express')
const app = express()
require('dotenv').config()

function initServer() {
  const { PORT } = process.env
  const app = express()
  const serverPort = PORT != null ? +PORT : 10000

  app.get('/healthCheck', (_, res) =>
    res.send('<h1>🩺 Server is running fine</h1>')
  )

  app.listen(serverPort, () =>
    // eslint-disable-next-line no-console
    console.log(
      `🚀[server]: Server is running at http://localhost:${serverPort}/healthCheck`
    )
  )
}

module.exports = { initServer }
