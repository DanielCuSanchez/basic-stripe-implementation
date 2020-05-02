const express = require('express')
const exphbs = require('express-handlebars') //Motor de plantillas
const path = require('path')
const PORT = 4000
//Initializations
const app = express()

//Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routes
app.use(require('./routes/index'))

//Static files 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))