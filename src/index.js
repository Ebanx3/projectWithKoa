import config from './config/config';
import app from './services/server';

const server = app.listen(config.PORT, ()=> console.log('Server up!, listening at port ',config.PORT) );

server.on('error',(error) => console.log('Error on server koa', error));
