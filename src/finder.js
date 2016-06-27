'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
   *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  let pass = [];
  if (input.constructor === Array){
    for (var i = 0; i < input.length; i++) {
      if (input[i].constructor !== Array){
        if (test(input[i]) === true) pass.push(input[i]);
      }
    }
  }
  else if (test(input) === true) return input;
  return pass;
};
