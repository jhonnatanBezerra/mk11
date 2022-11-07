import { createServer } from 'http';
import { app } from './app';

const port = process.env.PORT || 5000;

(async () => {

  createServer(app)
    .listen(port, () => { console.log(`Server listen on port ${port}`) });

})();