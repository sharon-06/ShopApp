const { check } = require('express-validator')
const pool = require('../db/db')
const { compare } = require('bcryptjs')

// password
const password = check('password').isLength({ min: 8, max: 255}).withMessage('Password has to be at least 8 characters long.')

// email
const email = check('email').isEmail().withMessage('Please provide a valid e-mail.')

// check if email exists
const emailExists = check('email').custom( async(value) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [
        value
    ])

    if (rows.length){
        throw new Error('E-mail already exists.')
    }
})

// login validation

const loginFieldCheck = check('email').custom( async (value, { req }) => {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        value
    ])
    if(!user.rows.length){
        throw new Error('E-mail does not exist.')
    }

    const validPassword = await compare(req.body.password, user.rows[0].password)

    if (!validPassword){
        throw new Error("Wrong password")
    }

    req.user = user.rows[0]
})

module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldCheck]
}