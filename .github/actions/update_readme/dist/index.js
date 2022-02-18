const core = require('@actions/core');
const fs = require('fs');

let testResult = core.getInput('cypressTest');
console.log(testResult)
const successBadge = 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg';
const failedBadge = 'https://img.shields.io/badge/test-failure-red.svg';

fs.readFile('README.md', 'utf-8', (err,data) => {
    if (err) {
        return console.error(err)
    }
    const markdownUpdate = data.replace(
        /(?<=\[!\[Cypress.io\]\()[\s\S]*(?=\)\])/gm,
        testResult !== 'success' ? successBadge : failedBadge
        
    )
    fs.writeFile('README.md', markdownUpdate, 'utf-8', (err) => {
        if (err) {
            
            return console.error(err)
        }
        // console.log('Update Succes,okey');
        console.log(markdownUpdate);
    })
})
