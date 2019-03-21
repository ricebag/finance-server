module.exports = () => (err, req, res, next) => {
    res.status(err.output.payload.statusCode).send(err.message)
    return next();
}