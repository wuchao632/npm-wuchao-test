const shell = require('shelljs');
shell.exec('git add .');
shell.exec('git commit -m');
shell.exec('git push -u origin master');