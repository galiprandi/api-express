import pino from 'pino'

export const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
})

export const initLogger = () => logger.info('🗸 Pino logger is ready')
