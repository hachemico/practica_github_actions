const core = require('@actions/core');
const fs = require('fs');

let resultado = core.getInput('cypressTest');
let badge;

resultado == 'success'
                ? badge = '![Success](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)'
                : badge = '![Failure](https://img.shields.io/badge/test-failure-red)'

fs.readFile('README.md', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/(?<=\<!---Start place for the badge --\>\n)[^]+(?=\n\<!---End place for the badge  --\>)/g, badge);

    fs.writeFile('README.md', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
