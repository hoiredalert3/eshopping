"use strict"

const passport = require("passport")
const LocalStrategy = require("passport-local")
const bcrypt = require("bcrypt")
const models = require("../models")

//Ham nay duoc goi khi xac thuc thanh cong va luu thong tin vao session
passport.serializeUser((user, done) => {
  done(null, user.id)
})

//Ham duoc goi boi passport.session de lay thong tin cua user tu csdl va dua vao req.user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await models.User.findOne({
      attributes: ["id", "email", "firstName", "lastname", "mobile", "isAdmin"],
      where: { id },
    })
    done(null, user)
  } catch (error) {
    done(error, null)
  }
})

//Ham xac thuc nguoi dung khi dang nhap
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email", //Ten dang nhap la email
      passwordField: "password",
      passReqToCallback: true, //Cho phep truyen req vao callback de kiem tra user da dang nhap chua
    },
    async (req, email, password, done) => {
      //Chuan hoa email
      if (email) {
        email = email.toLowerCase()
      }
      try {
        if (!req.user) {
          //Neu user chua dang nhap
          const user = await models.User.findOne({ where: { email } })
          if (!email) {
            //Neu email khong ton tai
            return done(
              null,
              false,
              req.flash("loginMessage", "Email does not exist!")
            )
          }

          //Neu mat khau khong dung
          if (!bcrypt.compareSync(password, user.password)) {
            return done(
              null,
              false,
              req.flash("loginMessage", "Invalid Password!")
            )
          }

          //Cho phep dang nhap
          return done(null, user)
        }
        //Bo qua dang nhap
        done(null, req.user)
      } catch (error) {
        done(error)
      }
    }
  )
)

module.exports = passport
