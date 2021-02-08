const os = require('os');
const pino = require('pino-http')({
  prettyPrint: {
    colorize: true,
  },
})
const server = require('express')();
const version = require('./package.json').version;

let serverStartedAt;
server
  .use(pino)
  .get('/', (_, res) => res.json({
    os: os.hostname(),
    port: process.env.PORT || `default (8000)`,
    message: 'HELLO OTUS!',
    version,
  }))
  .get('/health', (_, res) => res.json({
    upTime: Date.now() - serverStartedAt,
    server: os.hostname(),
    status: 'OK',
  }))
  .listen(process.env.PORT || 8000, () => {
    serverStartedAt = Date.now();
    pino.logger.info('server up');
  });
