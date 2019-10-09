const server = require('./api/server')

const port = process.env.PORT || 7777;
server.listen(port, () => console.log(`\n\trunning on http:localhost:${port}\n`));