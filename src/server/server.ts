import * as http from 'http';
import * as path from 'path';
const express = require('express');


const port: number = 3000

class App {
    private server: http.Server
    private port: number

    constructor(port: number) {
        this.port = port;
        const app = express();
        // express to serve a folder
        app.use(express.static(path.join(__dirname, '../client')));
        this.server = new http.Server(app);
    }

    public Start() {
        this.server.listen(this.port, () => {
            console.log( `Server listening on port ${this.port}.` );
        })
    }
}

new App(port).Start()
