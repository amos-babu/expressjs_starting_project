const express = require("express");
const app = express();
const port = 3000;

//Middleware to parse json bodies
app.use(express.json());

//Custom middleware for validation
const validateRegister = (req, res, next) => {
    const { username, password} = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required'});
    }
    next();
};

const validateLogin = (req, res, next) => {
    const { username, password} = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required'});
    }
    next();
};

//Routes 
app.post('/register', validateRegister, (req, res) => {
    const { username, password} = req.body;
    //Registration logic e.g Save user to database
    res.status(201).json({ message: 'User registered successfully', user: { username } });
});

app.post('/login', validateLogin, (req, res) => {
    const { username, password} = req.body;
    //Registration logic e.g Save user to database
    res.status(201).json({ message: 'Login Successfull', user: { username } });
});

app.get('/test', (req, res) => {
    res.status(200).send('OK');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
