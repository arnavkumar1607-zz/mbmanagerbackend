// API Routes
const indexRouter = require('./routes/index');
module.exports = function (app) {
    app.use('/api', indexRouter);
}