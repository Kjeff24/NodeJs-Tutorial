const http = require("http");

const {readFileSync} = require('fs')

// read files
const homePage = readFileSync('./navbar-toggle/index.html')
const homeJs = readFileSync('./navbar-toggle/main.js')
const homeStyle = readFileSync('./navbar-toggle/style.css')

const server = http.createServer((req, res) => {
	const url = req.url
	
	if(url === '/'){
		res.writeHead(200, {'content-type': 'text/html'})
		res.write(homePage)
		res.end();
	}
	else if (url === '/style.css'){
		res.writeHead(200, {'content-type': 'text/css'})
		res.write(homeStyle)
		res.end();
	}
	else if (url === '/main.js'){
		res.writeHead(200, {'content-type': 'text/javascript'})
		res.write(homeJs)
		res.end();
	}
	else if (url === '/about'){
		res.writeHead(200, {'content-type': 'text/html'})
		res.write("<h1>About page</h1>")
		res.end();
	}
	else{
		res.writeHead(404, {'content-type': 'text/html'})
		res.write("<h1>page not found</h1>")
		res.end();
	}
});

server.listen(5000);
