'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]for (var i = 0; i < array.length; i++) {
   array[i]
 }
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  if (input.constructor === Array){
    return helper(input, test);
  }
  else if (test(input) === true) return input;
  return -1;
};

function helper(input, test){
  let pass = [];

  if (input.constructor !== Array){
    if (test(input) === true) pass.push(input);
  } else {

    for (var i = 0; i < input.length; i++) {
      if (input[i].constructor !== Array && test(input[i]) === true) pass.push(input[i]);
      if (input[i].constructor === Array) {
        let check = helper(input[i],test);
        for (var j = 0; j < check.length; j++) {
          pass.push(check[j]);
        }
      }
      if (input[i].constructor === Object ){
        var keys = Object.keys(input[i]);
        for (var j = 0; j < keys.length; j++) {
          let checking = helper(input[i][keys[j]], test);
          for (var k = 0; k < checking.length; k++) {
            pass.push(checking[k]);
          }
        }
      }
    }

  }
  return pass;
};
