'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  let openParens = [];
  let last = openParens.length-1
  let open = {'[':1, '{':1, '(':1}
  let closed = {']':'[', '}':'{', ')': '('}
  let flag = false
  if (input !== ''){

    for (var i = 0; i < input.length; i++) {
      if (Boolean(open[input[i]])) {
        openParens.push(input[i]);
        flag = true;
      }
     else if (openParens.length !== 0 && closed[input[i]] == openParens[openParens.length-1]) {
        openParens.length = openParens.length-1;
      }
    }
    if (openParens.length === 0 && flag === true )return true;
    return false;

  }
  else {
    return false;
  }
};
