const express = require('express')
const router = express.Router()
const mongo = require('./../db')

router
  .get('/auth', (req, res) => {
    res.send('auth')
  })

module.exports = router