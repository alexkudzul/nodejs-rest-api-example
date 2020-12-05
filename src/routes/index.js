// Metodo router permite crear otras rutas del servidor

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Alex",
        "website": "google.com"
    }
    res.json(data);
});

module.exports = router;