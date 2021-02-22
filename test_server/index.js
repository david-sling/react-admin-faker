const express = require('express');
const cors = require('cors');
const router = express.Router();

const app = express();


app.use(cors());

const usersRoute = require('./routes/users')

router.get('/', (req, res) => {res.send('we are on home');});
router.use('/users', usersRoute);

app.use('/', router)
app.listen(process.env.PORT || 4000);