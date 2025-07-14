require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const path = require('path')
const favicon = require('serve-favicon')


const Admin = require('./models/Admin')
 // ajuste conforme necessário

const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(favicon(path.join(__dirname, '..', 'public', 'imagens', 'favicon.ico')))

