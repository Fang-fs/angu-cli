const chalk = require('chalk');

/**
 * Evaluate an expression in meta.json in the context of
 * prompt answers data.
 */

module.exports = function evaluate (exp, data) {
  /* eslint-disable no-new-func */
  const fn = new Function('data', 'with (data) { return ' + exp + '}'); //input
  //{ destDirName: 'my-project', inPlace: false, noEscape: true }
  try {
    console.log(exp,'exp');
    console.log(data, 'data');
    return fn(data)
  } catch (e) {
    console.error(chalk.red('Error when evaluating filter condition: ' + exp))
  }
};
