"format cjs";

var branch = require('git-branch');

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just 
// fine.
module.exports = {

  // When a user runs `git cz`, prompter will
  // be executed. We pass you cz, which currently
  // is just an instance of inquirer.js. Using
  // this you can ask questions and get answers.
  // 
  // The commit callback should be executed when
  // you're ready to send back a commit template
  // to git. 
  // 
  // By default, we'll de-indent your commit
  // template and will keep empty lines.
  prompter: function(cz, commit) {
    
    // Let's ask some questions of the user
    // so that we can populate our commit 
    // template. 
    //
    // See inquirer.js docs for specifics.
    // You can also opt to use another input
    // collection library if you prefer.
    cz.prompt([
      {
        type: 'input',
        name: 'jira',
        message: 'Enter the Jira ticket for this change ('+branch.sync()+'):\n',
        validate: function(input) {
          if (!input) {
            input = branch.sync();
            return true;
          } else {
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'driver',
        message: 'Identify the Driver, or sole developer if not pairing:\n',
        validate: function(input) {
          if (!input) {
            return 'Must specify a driver, when pairing we cannot rely on the commit author field.';
          } else {
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'navigateur',
        message: 'Identify the Navigator, if pair programming (optional):\n'
      },
      {
        type: 'input',
        name: 'backseat',
        message: 'Identify any additional pairing participants (optional):\n'
      },
      {
        type: 'input',
        name: 'message',
        message: 'Write a short, imperative tense description of the change:\n',
        validate: function(input) {
          if (!input) {
            return 'Must specify a commit message, be terse yet specific.';
          } else {
            return true;
          }
        }
      }
    ], function(answers) {

      // JIRA-123 Driver, Navigator, Backseat: commit message

      var jira = answers.jira.trim();

      var participants = answers.driver.trim();

      var navigateur = answers.navigateur.trim();
      participants  += navigateur ?  ', ' + answers.navigateur.trim() : '';

      var backseat  = answers.backseat.trim();
      participants += backseat ? ', ' + answers.backseat.trim() : '';

      var message = answers.message.trim();

      commit(jira + ' ' + participants + ': ' + message);
    });
  }
}