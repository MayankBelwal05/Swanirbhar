const { getProgress, updateProgress } = require("../controllers/progress.controller.js");
const { verifyToken } = require("../middleware/auth.middleware.js");

module.exports = app => {
    app.get("/users/:id/progress", verifyToken, getProgress);
    app.post("/users/:id/progress", verifyToken, updateProgress);
};
