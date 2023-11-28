const http = require('http');
const fs = require('fs');
const path = require('path');


const app = http.createServer((req, res) => {
    const {method, url} = req;
    if(method ==='GET') {
        fs.readFile(path.join(__dirname, 'index.html'),(err, html) => {
            res.write(html);
            res.end();
        });
    } else {
        response.statusCode = 404;
        response.end();
    }

    
})

app.listen(3000, () => {
    console.log('Server is started');
});