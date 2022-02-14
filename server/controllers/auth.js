const pool = require("../db/db")
const {hash} = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')

// dev controllers

exports.getUsers = async (req, res) => {
    try {
        const {rows} = await pool.query("SELECT * FROM users")

        console.log(rows)
        res.json(rows)

    } catch (error) {
        console.log(error.message)
    }
}

// app controllers

exports.newUser = async (req, res) => {
    const {email, username, password} = req.body
    try {
        /* const {email, username, password} = req.body;
        const createUser = await pool.query("INSERT INTO users (email, username, password, created_at) VALUES($1, $2, $3)", [
            email, username, password
        ]) */

        const hashedPassword = await hash(password, 10)

        await pool.query('INSERT INTO users(email, username, password) VALUES($1, $2, $3)', [
            email, username, hashedPassword
        ])

        return res.status(201).json({
            success: true,
            message: "The signup was succesful"
        })
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.login = async (req, res) => {
    let user = req.user
    let payload = {
        id: user.user_id,
        email: user.email
    }
    try {
        const token = await sign(payload, SECRET)

        return res.status(200).cookie('token', token, {httpOnly: true}).json({
            success: true,
            message: 'Logged in succesfuly'
        })
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.dashboard = async (req, res) => {
    try {
        return res.status(200).json({
            info: "Protected info"
        })
    } catch (error) {
        console.log(error.message)
    }
}

exports.logout = async (req, res) => {
    try {
        return res.status(200).clearCookie('token', {httpOnly: true}).json({
            success: true,
            message: 'Logged out succesfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}