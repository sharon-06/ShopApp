const {Router} = require('express')
const { getUsers, newUser, login, dashboard, logout } = require('../controllers/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const { validationMiddleware } = require('../middlewares/validation-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const router = Router()

router.get("/get-users", getUsers)
router.post('/signup', registerValidation, validationMiddleware, newUser)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/dashboard', userAuth, dashboard)
router.get('/logout', logout)

module.exports = router