const express = require('express');

const router = express.Router();

router.get('/create-or-update-user', (req, res) => {
    res.json({
        data: "you reached the create-or-update-user API endpoint"
    })
});

module.exports = router;