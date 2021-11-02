const core = require('@actions/core');
const github = require('@actions/github');
const format = require('date-fns')

try {
    const solutionfolder = core.getInput('solutionfolder');

    const time = format(Date.now(), 'yyyyMMdd-HHmm');

    core.setOutput('branchName', `${solutionfolder}-${time}`);

} catch (error) {
    core.setFailed(error.message);
}