/**
 * Necessary imports to make library, because data it's requested from a website
 */
const rp = require('request-promise')
const cheerio = require('cheerio')

/**
 * Get the info of a number
 * @param {Number} number - Landline/Mobile Number
 */

function getInfoNumber(number) {
    // Options for request-promise
    const options = {
        uri: 'https://www.comfi.com/abook/reverse',
        body: `phone_number=${number}`,
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        transform: function (body) {
            return cheerio.load(body);
        }
    }
    
    return rp(options)
        .then($ => {
            let country = $('tr:nth-of-type(2) td:nth-of-type(2)').text()
            let network = $('tr:nth-of-type(4) td:nth-of-type(2)').text()
            return `${network}, ${country}`
    })
}

module.exports = function lookup(number) {
    return Promise.resolve(getInfoNumber(number))
}