const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout/main_layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: '60mb', extended: false }));

// Generate a secret key

app.use('/', require('./routes/homeRoute'));
app.use('/form', require('./routes/formRoute'));

app.listen(PORT, async (err) => {
    if (err) throw err;
    else {
        await console.log('server running on port http://localhost:5000');
    }
});
