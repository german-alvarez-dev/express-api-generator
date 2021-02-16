const bcrypt = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const User = require('../models/user.model')

passport.serializeUser((user, next) => next(null, user._id))
passport.deserializeUser((id, next) => {
    User.findById(id)
        .then(theUser => next(null, theUser))
        .catch(err => next(err))
})

const strategySetup = new LocalStrategy((username, password, next) => {

    User.findOne({ username })
        .then(user => {
            if (!user) {
                return next(null, false, { message: "Wrong username" })
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return next(null, false, { message: "Wrong password" })
            }
            return next(null, user)
        })
        .catch(err => res.status(500).json(err))
})

passport.use(strategySetup)

module.exports = app => {
    app.use(passport.initialize())
    app.use(passport.session())
}