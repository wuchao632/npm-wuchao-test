const shell = require('shelljs');
shell.exec('git add .');
shell.exec(`git commit -m ${JSON.stringify(new Date())}`);
shell.exec(`git push -u origin master`);