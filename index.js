const express = require("express")
const app = express()
const port = 3000 // variável ambiente

const path = require("path")

const users = require('./users')

// * === ler o body ===*
app.use(
    express.urlencoded({
        extended: true,
    }),
)

// aequivos estáticos
app.use(express.static('public'))

app.use(express.json())
// *===================*

const basePath = path.join(__dirname, '/templates') // __dirname referencia o diretório atual

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => { console.log(`App rodando na porta: ${port}`) })
