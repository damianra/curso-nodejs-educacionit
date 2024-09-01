const http = require('http')

const server = http.createServer((req,res) => {
    let {url} = req
    
    if(url == '/') {
        res.end('Hola Mundo!')
    }
    else if(url == '/fyh') {
        res.end(new Date().toLocaleString())
    }
    else {
        res.writeHead(404, { 'content-type' : 'text/html'})
        res.end(`<h2 style="color:red;">Ruta ${url} no implementada</h2>`)
    }
})

const PORT = 8080
server.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))