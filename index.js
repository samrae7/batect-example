const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async() => await exec('./batect hello-world'))()