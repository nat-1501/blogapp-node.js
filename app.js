// Carregando módulos       
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    // const mongoose = require("mongoose")

// Configurações

    //Body Parser
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));

    // Handlebars
     app.engine('handlebars', handlebars({defaultLayout: 'main'}))
     app.set('view engine', 'handlebars');   

// Rotas


// Outros

const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando!")
})