'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FIZZBUZZ: exports fizzBuzz method', t => {
    t.ok( fpt.fizzBuzz, 'has fizzBuzz export' );
    t.equal( typeof fpt.fizzBuzz, 'function', 'fizzBuzz is a function' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length', t => {
    const result = fpt.fizzBuzz( 10 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ], 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array if argument is not a number', t => {
    const result = fpt.fizzBuzz( 'foo' );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array if argument is zero', t => {
    const result = fpt.fizzBuzz( 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );
