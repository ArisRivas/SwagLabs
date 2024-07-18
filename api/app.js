const express = require('express');
const app = express();
app.use(express.json());
app.get('/Aris/', (req, res) => {
    return res.status(200).send({msg: 'hola como estas'})
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));