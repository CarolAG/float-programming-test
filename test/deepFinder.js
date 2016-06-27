'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test('DEEPFINDER: returns -1 array if test failed', t => {
  const input = 5
  const result = fpt.deepFinder(input, value => {
    if (input % 2 === 0) return true;
    return false;
  })

  t.ok( result, 'generated a result' );
  t.equal( result, -1 , 'result is correct' );
  t.end();
} );

test('DEEPFINDER: returns one value if test passed with one argument', t => {
  const input = 10
  const result = fpt.deepFinder(input, value => {
    if (input % 2 === 0) return true;
    return false;
  })

  t.ok( result, 'generated a result' );
  t.equal( result, 10 , 'result is correct' );
  t.end();
} );
