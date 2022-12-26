// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express()
const port = 2000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})