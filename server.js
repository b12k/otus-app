const os = require('os');
const pino = require('pino-http')({
  prettyPrint: {
    colorize: true,
  },
})
const server = require('express')();

let serverStartedAt;
server
  .use(pino)
  .get('/', (_, res) => res.send(`[${os.hostname()}] Hello OTUS!`))
  .get('/health', (_, res) => res.json({
    upTime: Date.now() - serverStartedAt,
    server: os.hostname(),
    status: 'OK',
  }))
  .listen(process.env.PORT || 8000, () => {
    serverStartedAt = Date.now();
    pino.logger.info('server up');
  });
