const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { response } = require('express')

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curd-girl'
})

app.get('', (req, res) => {
    pool.getConnection((error, connection) => {
        if(error) throw error
        console.log(`Connection id: ${connection.threadId}`)

        connection.query(`SELECT * from employees`, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

app.get('/:id', (req, res) => {
    pool.getConnection((error, connection) => {
        if(error) throw error
        console.log(`Connection id: ${connection.threadId}`)

        connection.query(`SELECT * from employees WHERE id = ?`, [req.params.id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})


app.listen(port, () => console.log('listening..'))