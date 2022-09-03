const fs = require('fs');
const path = require('path');
const express = require('express');
const app = new express();
const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts.js')
const servicesRoutes = require('./routes/services.js')



app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, '/public')));

//In app.js near your other app.use statement add express middleware to handle POST data.
// With the use function add the express.urlencoded middleware
//urlencoded middleware to app. Make sure to set the extended option to true.
app.use(express.urlencoded({ extended: true }));

// const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
// const accounts = JSON.parse(accountData);

// const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
// const users = JSON.parse(userData);


// app.get('/transfer', (req, res) => res.render('transfer'));
app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));
// app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
// app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
// app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);





// app.post('/transfer', (req, res) => {
//     accounts[req.body.from].balance -= req.body.amount;
//     accounts[req.body.to].balance += parseInt(req.body.amount, 10);
//     writeJSON();
//     res.render('transfer', { message: 'Transfer Completed' });
// });

//  create a get route with a URL path of /payment that renders the payment view and passes in an object 
//with a key-value pair of account: accounts.credit.
// app.get('/payment', (req, res) => res.render('payment', { account: accounts.credit }));

/**
 * 
 * a post route with a URL path of /payment and an empty function.

In the body of the payment post route function:

Subtract req.body.amount from accounts.credit.balance and save it back to accounts.credit.balance
Add req.body.amount to accounts.
credit.available and save it back to accounts.credit.available remember 
to use parseInt() on both values when adding.
Convert the accounts javascript object to a JSON string and save it to a variable called accountsJSON
Write accountsJSON to a file. Note: write the file with the UTF8 encoding.
Render the payment view and pass an object with the following key value pairs, 
{ message: "Payment Successful", account: accounts.credit }
 */
// app.post('/payment', (req, res) => {
//     accounts.credit.balance -= req.body.amount;
//     accounts.credit.available += parseInt(req.body.amount);
//     writeJSON();
//     res.render('payment', { message: 'Payment Successful', account: accounts.credit });
// });

app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));
app.listen(3000, () => { console.log('PS Project Running on port 3000!') });