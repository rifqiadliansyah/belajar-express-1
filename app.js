const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const res = require('express/lib/response')
const { status } = require('express/lib/response')


// Buat render css , js , gamabar
app.use(express.static('public'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// MIDDLE WARE HARUS DITARO DULUSU SEVBELUM YG LAEN
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)

// UNTUK SETTING EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const kelas = {
        id : 1 ,
        nama : "Ridqwan"
    }

    // res.json(kelas)

    // res.redirect('/homie')
    res.render("pages/app",{kelas:kelas})
    
})

app.get('/about', (req, res) => {
    res.render("pages/about")
})

app.use(userRouter,(req,res)=>{
    res.status(200,req.body)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})