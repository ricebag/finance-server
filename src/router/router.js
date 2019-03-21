const { Router } = require( 'express');

module.exports = () => {
    const router = Router();

    router.get("/test/:abc", (req, res) => res.send(`api section to show routing ${req.params.abc}`))

    // router.use("/test", userCase())

    return router;
}