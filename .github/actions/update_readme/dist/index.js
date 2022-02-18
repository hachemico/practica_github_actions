import { getInput } from '@actions/core';
import { readFile, writeFile } from 'fs';

let resultado = getInput('cypressTest');
let badge;

resultado == 'success'
                ? badge = '![Success](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)'
                : badge = '![Failure](https://img.shields.io/badge/test-failure-red)'

readFile('README.md', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/(?<=\<!---Start place for the badge --\>\n)[^]+(?=\n\<!---End place for the badge  --\>)/g, badge);

    writeFile('README.md', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});