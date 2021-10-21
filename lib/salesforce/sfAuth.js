const jsforce = require('jsforce');
const config = require('config');
const username = config.get('salesforceUsername');
const password = config.get('salesforceCredentials.salesforcePassword');

const sfConnection = new jsforce.Connection({
    loginUrl: config.get('salesforceURL')
});

module.exports.sfLogin = () => {
    return new Promise((resolve, reject) => {
        sfConnection.login(username, password, function (err, userInfo) {
            if (err) reject(err);
            resolve(sfConnection);
        });
    });
}