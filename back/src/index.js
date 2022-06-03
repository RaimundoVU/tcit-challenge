const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./routes/routes'))

app.listen(port, () => {
		console.log(`app listening on port ${port}`)
});
