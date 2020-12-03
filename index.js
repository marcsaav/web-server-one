const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const port = process.env.PORT || 4000

const server = express()

server.use(express.json())

console.log('web 36 rocks')
console.log(__dirname)
console.log(process.env.USERNAME)
console.log(process.env.PORT)

server.use('/api/*', (__, res) => {
    res
        .json({ data: 'Marcos rules!'})
})

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})