const router = require('express').Router()

router.get("/home",(req,res) => {
    res.send("HOMEPAGE")
});

router.use('/',require('./auth'))

module.exports = router;