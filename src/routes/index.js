const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/checkout', async (req, res) => {
    console.log(req.body)
    res.send('Recibido')
})

module.exports = router