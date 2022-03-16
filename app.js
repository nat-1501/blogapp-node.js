// Carregando módulos       
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    const admin = require("./routes/admin")
    const path = require("path")
    // const mongoose = require("mongoose")

// Configurações

    //Body Parser
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));

    // Handlebars
     app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
     app.set('view engine', 'handlebars');   

//Public
app.use(express.static(path.join(__dirname,"public")))


// Rotas
    app.use('/admin', admin)

// Outros

const PORT = 8081
app.listen(PORT,() => {
    console.log("Servidor rodando!")
})