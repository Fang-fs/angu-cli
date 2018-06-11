const chalk = require('chalk');

module.exports = {
  v2SuffixTemplatesDeprecated (template, name) {
    const initCommand = 'angular init ' + template.replace('-2.0', '') + ' ' + name;

    console.log(chalk.red('  This template is deprecated, as the original template now uses Vue 2.0 by default.'));
    console.log(chalk.yellow('  Please use this command instead: ') + chalk.green(initCommand));
  },
  v2BranchIsNowDefault (template, name) {
    const angular1InitCommand = 'angular init ' + template + '#1.0' + ' ' + name;

    console.log(chalk.green('  This will install angular 1.x version of the template.'));
    console.log(chalk.yellow('  For angular 1.x use: ') + chalk.green(angular1InitCommand));
  }
};
