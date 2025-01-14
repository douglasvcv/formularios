//Rotas do projeto
import express from 'express'

const routes = express()

routes.get('/', (req, res)=>{
    res.render('home')
})
routes.get('/teste', (req, res)=>{
    res.send("Tudo ok")
})
routes.get('/teste2', (req, res)=>{
    res.send("Tudo ok")
})

export {routes}