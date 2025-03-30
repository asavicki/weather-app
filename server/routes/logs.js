const express = require('express');
const router = express.Router();

router.post('/log-action', (req, res) => {
    const { city } = req.body;

    const timeStamp = new Date().toISOString();

    // Log the action to the console (or save it to a database)
    console.log(`City "${city}" selected at ${timeStamp}`);

    // Send a response back to the client
    res.status(200).json({ message: 'Action logged successfully' });
}
);

module.exports = router;