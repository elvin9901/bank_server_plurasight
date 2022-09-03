const fs = require('fs');;
const path = require('path');

/**
 * In app.js locate the lines that are responsible for
 *  reading and parsing JSON from the src/json/accounts.json file. 
 * Copy and paste them to the new data.js file below the require statements.
 */
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);

//Transition User Data to Data Library
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData);


const writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts, null, 4)
    fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), accountsJSON, 'utf8');
}


module.exports = {
    accounts,
    users,
    writeJSON

}