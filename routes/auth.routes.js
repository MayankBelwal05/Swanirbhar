const { register, login } = require("../controllers/auth.controller.js");

module.exports = app => {
    app.post("/register", register);
    app.post("/login", login);
};
