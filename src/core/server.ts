import express from 'express'
import dotenv from 'dotenv'
import { logger } from './logger'

dotenv.config()

export function initServer() {
  const { PORT } = process.env
  const app = express()
  const serverPort = PORT != null ? +PORT : 10000

  app.get('/healthCheck', (_, res) =>
    res.send('<h1>🩺 Server is running fine</h1>')
  )

  app.listen(serverPort, () => {
    logger.info(`----------------------------------------`)
    logger.info(`🚀 Server is ready on port ${serverPort}`)
    logger.info(`----------------------------------------`)
  })

  return app
}
