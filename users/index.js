const express = require('express')
const router = express.Router()
const path = require("path")


const basePath = path.join(__dirname, '../templates') // __dirname referencia o diretório atual

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name =  req.body.name
    const age =  req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabelas users, resgatar um usuári do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router