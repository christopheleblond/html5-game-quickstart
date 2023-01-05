import express from 'express';
import path from 'path';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

const app = express();
const port = 3000;

const livereloadServer = livereload.createServer();
livereloadServer.server.once('connection', () => {
    setTimeout(() => {
        livereloadServer.refresh('/');
    }, 100);
});

app.get('/', (req, res) => {

    const filename = 'index.html';    
    const options = {
        root: path.join(__dirname)
    }

    res.sendFile(filename, options, (err) => {
        if (err) {
            console.error(err);
        }else{
            console.log(filename);
        }
    });
});

app.use(express.static('assets'));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});