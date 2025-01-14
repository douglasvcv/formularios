//Carregando módulos
import express from 'express'
//Verificar esse import (está com erro)
import {engine} from 'express-handlebars'
import bodyParser from 'body-parser'
import path from 'path'
import { routes } from './routes/routes.js'
//import mongoose from 'mongoose'

//Configurações
        const app = express()
    //BodyParser
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', engine());
        app.set('view engine', 'handlebars');
        app.set('views', './src/views');
//Rotas
app.get('/', (req, res)=>{
    res.render('home')
})
//Outros
app.listen(8080, ()=>console.log("Servidor Rodando"))