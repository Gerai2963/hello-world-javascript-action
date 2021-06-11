const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
  const pr_body = github.context.payload.pull_request.body;
  console.log(`Comments for this PR is:`);
  console.log(`${pr_body}`);
  
  const pr_key = github.context.payload.pull_request.key;
  console.log(`Key for this PR is:`);
  console.log(`${pr_key}`);
  
  const pr_number = github.context.payload.pull_request.number;
  console.log(`Number for this PR is:`);
  console.log(`${pr_number}`);
  
  const pr_title = github.context.payload.pull_request.title;
  console.log(`Title for this PR is:`);
  console.log(`${pr_title}`);
  
} catch (error) {
  console.log('Test failed');
  core.setFailed(error.message);
}
