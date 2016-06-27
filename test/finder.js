'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FINDER: exports finder method', t => {
    t.ok( fpt.finder, 'has finder export' );
    t.equal( typeof fpt.finder, 'function', 'finder is a function' );
    t.end();
} );

test( 'FINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.finder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'allegory' ], 'result is correct' );
    t.end();
} );

test('FINDER: returns an empty array if test failed', t => {
  const input = 5
  const result = fpt.finder(input, value => {
    if (input % 2 === 0) return true;
    return false;
  })

  t.ok( result, 'generated a result' );
  t.deepEqual( result, [] , 'result is correct' );
  t.end();
} );

test('FINDER: returns one value if test passed with one argument', t => {
  const input = 10
  const result = fpt.finder(input, value => {
    if (input % 2 === 0) return true;
    return false;
  })

  t.ok( result, 'generated a result' );
  t.equal( result, 10 , 'result is correct' );
  t.end();
} );
