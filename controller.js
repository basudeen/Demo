const connection = require('./dp');
const { response } = require('express');

const detail = (req, res) => {
    var qry = "SELECT * FROM info"
    connection.query(qry, function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err
            })
        }
        else if (result.length > 0) {
            res.send({
                status: 200,
                message: " success",
                data: result
            })
        }
        else {
            res.send({
                status: 400,
                message: "invalied data",
                data: []
            })

        }

    })
}
const insert = (req, res) => {
    var qry = "INSERT INTO info (name,age,email,mobile) VALUES (?,?,?,?)"
    connection.query(qry, [req.body.name, req.body.age, req.body.email, req.body.mobile], function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err
            })
        }
        else if (result) {
            res.send({
                status: 200,
                message: " success",
                data: result
            })
        }
        else {
            res.send({
                status: 400,
                message: "invalied data",
                data: []
            })

        }

    })
}
const update = (req, res) => {
    var qry = "UPDATE info SET name=?,age=?,email=?,mobile=? WHERE id=?"
    connection.query(qry, [req.body.name, req.body.age, req.body.email, req.body.mobile, req.body.id], function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err
            })
        }
        else if (result) {
            res.send({
                status: 200,
                message: " success",
                data: result
            })
        }
        else {
            res.send({
                status: 400,
                message: "invalied data",
                data: []
            })

        }

    })
}
const deleted = (req, res) => {
    var qry = "SELECT * FROM info where id=?"
    connection.query(qry, [req.body.id], function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err
            })
        }
        else if (result.length > 0) {
            var qry = "DELETE FROM  info WHERE id=?"
            connection.query(qry, [req.body.id], function (err, resultt) {
                if (err) {
                    res.send({
                        status: 400,
                        message: "err",
                        data: err
                    })
                }
                else if (resultt) {
                    res.send({
                        status: 200,
                        message: " success",
                        data: resultt
                    })
                }
                else {
                    res.send({
                        status: 400,
                        message: "invalied data",
                        data: []
                    })

                }

            })
        }
        else {
            res.send({
                status: 400,
                message: "invalied data",
                data: []
            })

        }

    })
}
const edit = (req, res) => {
        var qry = "SELECT * FROM info where id=?"
        connection.query(qry, [req.body.id], function (err, result) {
            if (err) {
                res.send({
                    status: 400,
                    message: "err",
                    data: err
                })
            }
            else if (result.length > 0) {
                res.send({
                    status: 200,
                    message: " success",
                    data: result
                })
            }
            else {
                res.send({
                    status: 400,
                    message: "invalied data",
                    data: []
                })

            }

        })
    }


module.exports = { detail, insert, update, deleted, edit } 